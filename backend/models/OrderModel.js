 const {model} = require("mongoose");
 const {OrdersSchema} = require("../Schemas");

const orderModel = new model("Order",OrdersSchema);
module.exports =  orderModel;