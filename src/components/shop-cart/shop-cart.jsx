import { useState } from "react";
import { CartList } from "../cart-list";
import { useEffect } from "react";

export const ShopCart = ({ shop, removeAction }) => {
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

  // const calculateTotal = () => {

  // }
  return (
    <>
      {/* <pre>{JSON.stringify(cartItems, null, 1)}</pre> */}
      <section className="hero">
        <div className="hero-body">
          {/* <p className="title">{shop.name}</p> */}
          {/* <p className="subtitle">{item.summary} - {item.price}</p> */}
          <CartList items={cartItems} removeAction={removeAction} />

          <div className="columns">
            <div className="column is-2"></div>
            <div className="column is-4"></div>
            <div className="column is-2 has-text-weight-medium">TOTAL</div>
            <div className="column is-2 has-text-weight-medium">
              € {cartItems?.reduce((acc, st) => acc + st.subtotal, 0)}
            </div>
            <div className="column is-2"></div>
          </div>

          <button
            className="button is-primary"
            // onClick={addDish}
          >
            CHECKOUT
          </button>
        </div>
      </section>
    </>
  );
};
