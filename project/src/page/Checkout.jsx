import React from "react";
import Centercart from "./Checkoutcomponent/Centercart";
import Modal1 from "./Checkoutcomponent/Modal1";
import Modal2 from "./Checkoutcomponent/Modal2";
import "./checkout.css"

export default function Checkout() {
  return (
    <div>
      <Modal1 />
      <Modal2 />
      <Centercart />
    </div>
  );
}
