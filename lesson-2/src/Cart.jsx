import React from "react";
import { useState } from "react";

const Cart = () => {
  const allAddedProducts = useSelector (state => state );
  console.log(allAddedProducts);
  return (
    <div>
      <h1>Cart</h1>
    </div>
  )

}
export default Cart


