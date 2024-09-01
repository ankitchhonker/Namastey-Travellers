import React, { useEffect } from "react";
import { Link } from "react-router-dom";
 import { useState } from "react";
import axios from "axios";
import {v4 as uuidv4} from "uuid";
const Orders = () => {
  const [allOrder,setAllOrder] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/newOrder" ).then((res)=>{
      setAllOrder(res.data);
    })
  })

  return (
    <div className="orders">
      {!allOrder.length?<div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
        
      </div>:<div></div>
}
      <h3 className="title">Open Orders ({allOrder.length})</h3>
        <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Type</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Status</th>
             
          </tr>
      
            {allOrder.map((order)=>{
              const Instrument = order.name;
              const Type = order.mode;
              const Qty = order.qty;
              const price = order.price;
              return (<tr key={uuidv4()}>
                     <td>{Instrument}</td>
                     <td>{Type}</td>
                     <td>{Qty}</td>
                     <td>{price}</td>
                     <td>Active</td>
                   </tr>);
             
            })}
            
           
          </table>
         </div> 
    </div>
  );
};

export default Orders;
