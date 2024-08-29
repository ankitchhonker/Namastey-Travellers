import React from "react";
import { Link } from "react-router-dom";
function Hero({username}) {
  const t = localStorage.getItem("token");
  console.log(t);
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="col-12 mb-4">
          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-12">
          <h1 className="mt-4 mb-3">Invest in Everything</h1>
          <p className="mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
        </div>
        <div className="col-12">
         {!username? <Link to="/signup">
          <button
            className="btn btn-primary fs-5 mb-4"
            style={{ width: "80%", maxWidth: "300px" }}
          >
            Signup Now
          </button>
         </Link>:""}
        </div>
      </div>
    </div>
  );
}

export default Hero;
 