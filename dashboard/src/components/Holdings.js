import React, { useEffect, useState } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalChartBar";
const Holdings = () => {
  const [allHoldings,setAllHoldings] = useState([]);
  const labels = allHoldings.map((subarray)=> subarray["name"]);
  const data ={
    labels,
    datasets:[
      {
        label:"stock price",
        data: allHoldings.map((stock)=> stock.price),
        backgroundColor:"rgba(255,99,132,0.5",
      }
    ]
  }
  useEffect(()=>{
    axios.get("http://localhost:3002/allHoldings").then((res)=>{
      setAllHoldings(res.data);
    }).catch((err)=>{console.log(err);})
  })
  return (
    <>
    
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
        {allHoldings.map((stock,idx)=>{
          const currValue = stock.price * stock.qty;
          const isProfit = currValue - stock.avg >= 0.0;
          const profClass = isProfit ? "profit" : "loss";
          const dayClass = stock.isLoss ? "loss" : "profit";
          return(
            <tr key={idx}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td className={dayClass}>{currValue.toFixed(2)}</td>
              <td className={profClass}>{(currValue-stock.avg * stock.qty).toFixed(2)}</td>
              <td className={profClass}>{stock.net}</td>
              <td className={profClass}>{stock.day}</td>
            </tr>
          )
        })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;
