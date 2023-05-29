import { useNavigate, useParams } from "react-router";
import { DishList } from "../dish-list";
import { Shop } from "../shop/shop";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchShop } from "../../features/shops/shops.actions";
import { selectAllShops } from "../../features/shops/shops.dataSlice";

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
        <Shop shop={shop} selectDishAction={onDishSelected} />
      </>
    );
  } else {
    return <></>;
  }
};
