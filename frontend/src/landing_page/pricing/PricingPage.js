import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";

function PricingPage({username}) {
  return (
    <>
      <Hero />
     {!username? <OpenAccount />:<></>}
      <Brokerage />
    </>
  );
}

export default PricingPage;
