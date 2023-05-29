import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchShop } from "../../features/shops/shops.actions";
import {
  removeDishFromOrder,
  selectAllShops,
} from "../../features/shops/shops.dataSlice";
import { ShopCart } from "../shop-cart/shop-cart";

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
    console.log("SETTING SHOP")
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

  if (shop !== undefined) {
    return (
      <>
        <div className="columns">
          <div className="column">
            <ShopCart
              shop={shop}
              selectDishAction={onDishSelected}
              removeAction={onRemoveDish}
            />
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
