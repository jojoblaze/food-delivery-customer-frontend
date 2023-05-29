import { useNavigate, useParams } from "react-router";
import { DishList } from "../dish-list";
import { Shop } from "../shop/shop";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchShop } from "../../features/shops/shops.actions";
import { selectAllShops } from "../../features/shops/shops.dataSlice";
import shoppingCart from "../../shopping-cart.svg";
import { Link } from "react-router-dom";

export const ShopHOF = () => {
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
    const currentShop = shops.find((s) => s.id === merchantId);
    if (currentShop !== undefined) setShop(currentShop);
  }, [shops]);

  const onDishSelected = (dishId) => {
    navigate(`/merchants/${merchantId}/menu/${dishId}`);
  };

  if (shop !== undefined) {
    return (
      <>
        <nav className="navbar" role="navigation" aria-label="shop navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              {/* <img src={logo} alt={"logo"} width="112" height="28" /> */}
            </a>
            <div className="is-size-2">{shop.name}</div>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            {/* <div className="navbar-start">
              <a className="navbar-item" href="/">
                Home
              </a>

              <a className="navbar-item">My Orders</a>
            </div> */}

            <div className="navbar-end">
              {/* <a className="navbar-item" href="/"> */}

              {/* </a> */}
              <div className="navbar-item">
                <Link
                  className="navbar-item"
                  to={`/merchants/${merchantId}/cart`}
                  //  onClick={() => selectDishAction(dish.id)}
                >
                  <img
                    src={shoppingCart}
                    alt={"shopping-cart"}
                    width="112"
                    height="28"
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="columns">
          <div className="column">
            <Shop shop={shop} selectDishAction={onDishSelected} />
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
