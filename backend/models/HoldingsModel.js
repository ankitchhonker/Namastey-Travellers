const {model} = require("mongoose");
const { HoldingSchma } = require("../Schemas");

const HoldingModel = new model("holding",HoldingSchma);

module.exports ={HoldingModel};