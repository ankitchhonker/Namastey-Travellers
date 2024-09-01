import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { useCookies } from "react-cookie"; 
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";

import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
 import Login from "./landing_page/signup/login";

const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
 
  useEffect(() => {
    const verifyCookie = async () => {
     
      const { data } = await axios.post(
        "https://stock-trading-project-3.onrender.com",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      // can i set the statement here if user exitst then go to the localhost:3001 
       
      setUsername(user);
      
      if (status) {
        toast(`Hello ${user}`, {
          position: "top-right",
        });
      }  
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  
  const Logout = () => {
    console.log("Logout Triggered");
  console.log("Token before removal:", cookies.token); // Log the token before removal
  removeCookie("token"); 
  cookies.token=null// Remove the token cookie
  console.log("Token after removal:", cookies.token); // Log the token after removal

  // Optional: Force re-render after removing the cookie
  setTimeout(() => {
    navigate("/signup"); // Navigate to the signup page
  }, 0);
  };
  return ( 
    <>
<Navbar username={username} onLogout={Logout} />
    <Routes>
      <Route path="/" element={<HomePage username={username}/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage username={username}/>} />
      <Route path="/pricing" element={<PricingPage username={username}/>} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
   );
}

 
root.render(
  <BrowserRouter >
    <App/>
  </BrowserRouter>
);
