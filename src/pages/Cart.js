import React from "react";

function Cart() {
  
  return(
    <>
      <div className="not-found">
        <h2>Your Cart</h2>
        <img src="empty-cart.png" 
           alt="empty cart" width={300}/>
        <button className="button">Go back</button>
      </div>
    </>
  )
}

export default Cart;