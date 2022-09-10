import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div style={{ marginBottom: "50px" }} className="cart cart--empty">
      <h2>
        Your cart is empty<span>😕</span>
      </h2>
      <p>
        You didn't order anything
        <br />
        To put item in a cart return to the main page
      </p>
      <img src="empty-cart.png" alt="Empty cart" />
      <Link
        style={{ textDecoration: "none" }}
        className="button button--black"
        to="/">
        <span>Go back</span>
      </Link>
    </div>
  );
};

export default EmptyCart;
