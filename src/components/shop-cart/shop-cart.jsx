import { useState } from "react";
import { CartList } from "../cart-list";
import { useEffect } from "react";

export const ShopCart = ({ items, total, removeAction, checkoutAction }) => {

  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <CartList items={items} removeAction={removeAction} />

          <div className="columns">
            <div className="column is-2"></div>
            <div className="column is-4"></div>
            <div className="column is-2 has-text-weight-medium">TOTAL</div>
            <div className="column is-2 has-text-weight-medium">
              {total} €
            </div>
            <div className="column is-2"></div>
          </div>

          <button
            className="button is-primary"
            onClick={checkoutAction}
          >
            CHECKOUT
          </button>
        </div>
      </section>
    </>
  );
};
