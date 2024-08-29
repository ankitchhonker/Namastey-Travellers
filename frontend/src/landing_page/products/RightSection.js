import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-12 col-md-6 p-4 p-md-5">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4">{productDesription}</p>
          <div>
            <a href={learnMore} className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
