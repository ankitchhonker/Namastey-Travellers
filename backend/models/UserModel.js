const { model } = require("mongoose");
const { userSchema } = require("../Schemas");

const UserModel = new model("User",userSchema);
module.exports = UserModel;