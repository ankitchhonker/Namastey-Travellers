import React from "react";
import { Link } from "react-router-dom";
 
function Navbar({ username, onLogout }) {
  
  const logoUrl = "data:image/png;base64,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";
   const handleDashboard = ()=>{
    window.location.href = "http://localhost:3001"
   }
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src= {logoUrl}
           
            alt="Logo"
            className="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {!username ?<Link className="nav-link active" aria-current="page" to="/signup">
                <b>Signup</b>
              </Link>:<Link className="nav-link active" aria-current="page"  onClick={onLogout}>
                <b>Logout</b>
              </Link>
              
              
              }
              
            </li>

           {username? <li className="nav-item">
              <Link className="nav-link active" onClick={handleDashboard}>
                 Dashboard
              </Link>
            </li>:<li></li>}
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                 About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
