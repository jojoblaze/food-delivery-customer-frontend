import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createOrder, fetchShop } from "../../features/shops/shops.actions";
import {
  removeDishFromOrder,
  selectAllShops,
} from "../../features/shops/shops.dataSlice";
import { ShopCart } from "../shop-cart/shop-cart";
import { Checkout } from "../checkout";

export const ShopCartHOF = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { merchantId } = useParams();
  const [shop, setShop] = useState();

  const shops = useSelector(selectAllShops);

  useEffect(() => {
    async function fetchData() {
      console.log("LOADING DATA");
      await dispatch(fetchShop(merchantId)).unwrap();
      // const s = await dispatch(fetchShop(merchantId)).unwrap();
      // console.log("NEW SHOP", s);
      // setShop(s);
    }
    if (shops === undefined || shops.length === 0) fetchData();
  }, []);

  useEffect(() => {
    console.log("SETTING SHOP");
    const currentShop = shops.find((s) => s.id === merchantId);
    // if (currentShop !== undefined)
    setShop(currentShop);
  }, [shops]);

  const onDishSelected = (dishId) => {
    navigate(`/merchants/${merchantId}/menu/${dishId}`);
  };

  const onRemoveDish = (dishId) => {
    console.log("on remove dish!", dishId);
    dispatch(removeDishFromOrder({ merchantId, dishId }));
  };


  const [cartItems, setCartItems] = useState();

  const prepareCart = () =>
    shop?.activeOrders?.map((dishOrder) => {
      const dish = shop?.dishes.find((d) => d.id === dishOrder.dishId);
      return {
        ...dish,
        quantity: dishOrder.quantity,
        subtotal: dish.price * dishOrder.quantity,
      };
    });

  useEffect(() => {
    const items = prepareCart();
    setCartItems(items);
  }, [shop]);

  const [total, setTotal] = useState();

  useEffect(() => {
    const total = cartItems?.reduce((acc, st) => acc + st.subtotal, 0)
    setTotal(total);
  }, [cartItems]);

  const paymentMethods = ["PayPal"];

  const [showCheckout, setShowCheckout] = useState(false);

  const onCheckout = () => {
    setShowCheckout(true);
  };

  const onSubmitOrder = () => {
    const order = {
      paymentInfos: {
        paymentMethod: paymentMethods[0],
        total: total
      },
      dishes: [...shop.activeOrders],
      deliveryInfo: {}
    }
    console.log("submitting order", order)
    dispatch(createOrder(order))
  }

  if (shop !== undefined) {
    return (
      <>
        <div className="columns"
        style={{ display: showCheckout ? "none" : "block" }}
        >
          <div className="column">
            <ShopCart
              items={cartItems}
              total={total}
              selectDishAction={onDishSelected}
              removeAction={onRemoveDish}
              checkoutAction={onCheckout}
            />
          </div>
        </div>
        <div
          className="columns"
          style={{ display: showCheckout ? "block" : "none" }}
        >
          <div className="column">
            <Checkout
              paymentMethods={paymentMethods}
              shop={shop}
              selectDishAction={onDishSelected}
              removeAction={onRemoveDish}
              orderAction={onSubmitOrder}
            />
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
