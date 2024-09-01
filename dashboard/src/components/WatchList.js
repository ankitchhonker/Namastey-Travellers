 
import React, { useState }  from "react";
import { watchlist } from "../data/data";
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from '@mui/icons-material';
import { Grow, Tooltip } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { DoughnutChart } from "./DoughtNut";
import GeneralContext from "./GeneralContex";
import { useContext } from "react";
const WatchList = () => {
const labels = watchlist.map((subArray)=>subArray["name"]);
const data = {
  labels,
  datasets:[
    {
      
    labels:"price",
    data:watchlist.map((stock)=> stock.price),
    backgroundColor:[
      "rgba(255,99,132,0.2)",
      "rgba(54,162,235,0.2)",
      "rgba(255,99,132,0.2)",
      "rgba(75,192,192,0.2)",
      "rgba(153,102,255,0.2)",
      "rgba(255,159, 64,0.2)",
    ],
    backgroundColor:[
      "rgba(255,99,132,1)",
      "rgba(54,162,235,1)",
      "rgba(255,99,132,1)",
      "rgba(75,192,192,1)",
      "rgba(153,102,255,1)",
      "rgba(255,159, 64,1)",
    ],
    }
  ]
}
  
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,idx)=>{
          return(
            <WatchListItem stock={stock} key={idx}/>
          )
        })}
      </ul>
      <DoughnutChart data={data}/>
    </div>
  );
};

export default WatchList;

let WatchListItem = ({stock})=>{
  const [showWatchListAction,setShowWatchListAction]=useState(false);
  
  let handleMouseEnter = ()=>{
    setShowWatchListAction(true);
  }
  let handleMouseLeave = ()=>{
    setShowWatchListAction(false);
  }
  

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown?"down":"up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown?<KeyboardArrowDown className="down"/>:<KeyboardArrowUp className="up"/>}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListAction && <WatchListActions uid={stock.name}/>}
    </li>
  )
}

let WatchListActions = ({uid})=>{
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  }; 

 return(
  <span className="actions">
    <span>
      <Tooltip
       title="Buy (B)"
       placement="top"
       TransitionComponent={Grow}
       >
        <button className="buy" onClick={handleBuyClick}>Buy</button>
       </Tooltip>
       <Tooltip
       title="Sell (B)"
       placement="top"
       TransitionComponent={Grow}
       >
        <button className="sell">Sell</button>
       </Tooltip>
       <Tooltip
       title="Analitical"
       placement="top"
       TransitionComponent={Grow}
       >
        <button className="action">
         <BarChartOutlined className="icon"/>
        </button>
       </Tooltip>
       <Tooltip
       title="More"
       placement="top"
       TransitionComponent={Grow}
       >
        <button className="action">
         <MoreHoriz className="icon"/>
        </button>
       </Tooltip>
    </span>
  </span>
 )
}