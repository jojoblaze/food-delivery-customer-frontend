import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  addDishToOrder,
  selectAllShops,
} from "../../features/shops/shops.dataSlice";
import { fetchShops } from "../../features/shops/shops.actions";

export const DishDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { merchantId, dishId } = useParams();
  const shops = useSelector(selectAllShops);

  const [dish, setDish] = useState();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    
    if (shops === undefined || shops.length === 0) {
      dispatch(fetchShops());
    }
  }, []);

  useEffect(() => {
    if (shops !== undefined && shops.length > 0) {
      const shop = shops.find((s) => s.id === merchantId);
      const d = shop.dishes.find((d) => d.id === dishId);
      setDish(d);
    }
  }, [shops]);

  const addDish = () => {
    dispatch(
      addDishToOrder({
        merchantId: merchantId,
        dishId: dishId,
        quantity: quantity,
      })
    );
    navigate(`/merchants/${merchantId}`);
  };
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <p className="title">{dish?.name}</p>
          <p className="subtitle">
            {dish?.summary} - {dish?.price}
          </p>
          <input
            className="input"
            type="number"
            placeholder="Quantity"
            value={quantity || 1}
            min={0}
            onChange={(e) => setQuantity(e.target.value)}
          />
          {dish !== undefined ? (
            <button className="button" onClick={addDish}>
              {`TOTALE ${dish?.price * quantity}`}
            </button>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};
