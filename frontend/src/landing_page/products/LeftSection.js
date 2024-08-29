import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
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
          <div className="mb-4">
            <a href={tryDemo} className="btn btn-primary me-3">
              Try Demo
            </a>
            <a href={learnMore} className="btn btn-secondary">
              Learn More
            </a>
          </div>
          <div className="d-flex flex-wrap">
            <a href={googlePlay} className="me-3">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play Badge"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store Badge"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
