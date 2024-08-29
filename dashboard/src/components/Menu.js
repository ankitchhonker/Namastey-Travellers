import React, { useState,useCookies, useEffect } from "react";
import { Link } from "react-router-dom";


const Menu = () => {
  const [menuClick, setmenuClick]= useState(0);
  const [isprofileClick,setisprofileClick]=useState(false);
  let handleclickMenu = (idx)=>{
    setmenuClick(idx)
  }
  let handleClickProfile =()=>{
    setisprofileClick(!isprofileClick);
}
  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus navbar-expand-md">
        <ul className="navbar-nav mr-auto">
       
        <Link to="/" onClick={()=>{window.location.href = "http://localhost:3000"}}>
        <li>
            <p> Home </p>
            </li>
         </Link>
        
          
         <Link to="/" onClick={()=>{handleclickMenu(0)}}>
          <li>
            <p className={menuClick === 0 ?  activeMenuClass : menuClass}>Dashboard</p>
          </li>
         </Link>
         <Link to="/orders" onClick={()=>{handleclickMenu(1)}}>
          <li>
            <p className={menuClick === 1 ?  activeMenuClass : menuClass}>Orders</p>
          </li>
         </Link>
         <Link to="/Holdings" onClick={()=>{handleclickMenu(2)}}>
          <li>
            <p className={menuClick === 2 ?  activeMenuClass : menuClass}>Holdings</p>
          </li>
         </Link>
         <Link to="/positions" onClick={()=>{handleclickMenu(3)}}>
          <li>
            <p className={menuClick === 3 ?  activeMenuClass : menuClass}>Positions</p>
          </li>
         </Link>
         <Link to="/funds" onClick={()=>{handleclickMenu(4)}}>
          <li>
            <p className={menuClick === 4 ?  activeMenuClass : menuClass}>Funds</p>
          </li>
         </Link>
         <Link to="/apps" onClick={()=>{handleclickMenu(5)}}>
          <li>
            <p className={menuClick === 5 ?  activeMenuClass : menuClass}>Apps</p>
          </li>
         </Link>
        </ul>
        <hr />
        <div className="profile" onClick={handleClickProfile}>
          <div className="avatar">ZU</div>
          <p className={isprofileClick===true?activeMenuClass:menuClass}>USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
