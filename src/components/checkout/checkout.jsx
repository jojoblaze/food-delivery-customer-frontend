import { useState } from "react";
import { CartList } from "../cart-list";
import { useEffect } from "react";

export const Checkout = ({ paymentMethods, orderAction }) => {
  const [paymentMethod, setPaymentMethod] = useState();

  const paymentMethodList = paymentMethods?.map((pm) => <li>{pm}</li>);

  return (
    <>
      {/* <pre>{JSON.stringify(cartItems, null, 1)}</pre> */}
      <section id={"payment-methods"} className="hero">
        <div className="hero-body">
          <ul>{paymentMethodList}</ul>
        </div>
      </section>
      <section id={"delivery-informations"} className="hero">
        <div className="hero-body">Delivery to: ???</div>
      </section>
      <button
        className="button is-primary"
        onClick={orderAction}
      >
        PAY
      </button>
    </>
  );
};
