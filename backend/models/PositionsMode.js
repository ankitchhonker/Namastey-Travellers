const {model} = require("mongoose");
const { PositionsSchma } = require("../Schemas");


const PositionsModel = new model("position",PositionsSchma);

module.exports = {PositionsModel};