import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchShops } from '../../features/shops/shops.actions'
import { selectAllShops } from '../../features/shops/shops.dataSlice';
import { ShopList } from "../shop-list/shop-list";

export const ShopListHOF = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const shops = useSelector(selectAllShops)

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchShops(/* TODO: pass geo location */))
    }
    // if (shops === undefined) 
    fetchData();
  }, []);

  if (shops !== undefined) {
    return (
      <>
        {/* <pre>{JSON.stringify(shops, null, 1)}</pre> */}
        <ShopList shops={shops} />
      </>
    );
  } else {
    return <>wait</>;
  }
};
