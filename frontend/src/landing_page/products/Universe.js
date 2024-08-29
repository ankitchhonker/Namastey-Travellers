import React from "react";

function Universe({username}) {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div className="col">
          <div className="card text-center p-3">
            <img
              src="media/images/smallcaseLogo.png"
              alt="Partner Logo"
              className="card-img-top img-fluid"
              style={{ maxWidth: "150px", margin: "0 auto" }}
            />
            <p className="mt-2 text-muted">Thematic investment platform</p>
          </div>
        </div>
        <div className="col">
          <div className="card text-center p-3">
            <img
              src="media/images/dittoLogo.png"
              alt="Partner Logo"
              className="card-img-top img-fluid"
              style={{ maxWidth: "150px", margin: "0 auto" }}
            />
            <p className="mt-2 text-muted">Thematic investment platform</p>
          </div>
        </div>
        <div className="col">
          <div className="card text-center p-3">
            <img
              src="media/images/sensibullLogo.svg"
              alt="Partner Logo"
              className="card-img-top img-fluid"
              style={{ maxWidth: "150px", margin: "0 auto" }}
            />
            <p className="mt-2 text-muted">Thematic investment platform</p>
          </div>
        </div>
        <div className="col">
          <div className="card text-center p-3">
            <img
              src="media/images/streakLogo.png"
              alt="Partner Logo"
              className="card-img-top img-fluid"
              style={{ maxWidth: "150px", margin: "0 auto" }}
            />
            <p className="mt-2 text-muted">Thematic investment platform</p>
          </div>
        </div>
        <div className="col">
          <div className="card text-center p-3">
            <img
              src="media/images/goldenpiLogo.png"
              alt="Partner Logo"
              className="card-img-top img-fluid"
              style={{ maxWidth: "150px", margin: "0 auto" }}
            />
            <p className="mt-2 text-muted">Thematic investment platform</p>
          </div>
        </div>
        <div className="col">
          <div className="card text-center p-3 ">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="Partner Logo"
              className="card-img-top img-fluid"
              style={{ maxWidth: "150px", margin: "0 auto" }}
            />
            <p className="mt-2 text-muted">Thematic investment platform</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        {!username?<button
          className="btn btn-primary fs-5"
          style={{ width: "150px" }}
        >
          Signup Now
        </button>:""}
      </div>
    </div>
  );
}

export default Universe;
