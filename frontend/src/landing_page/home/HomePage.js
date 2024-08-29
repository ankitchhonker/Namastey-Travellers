import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";
 
function HomePage({username}) {
  return (
    <>
       
      <Hero username={username}/>

      <Awards />
      <Stats />
      <Pricing />
      <Education />
     {!username? <OpenAccount />:<></>}
      
    </>
  );
}

export default HomePage;
