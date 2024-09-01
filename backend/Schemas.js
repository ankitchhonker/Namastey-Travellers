const {Schema, default: mongoose} = require("mongoose");
const bcrypt = require("bcrypt");
const HoldingSchma = new Schema({
    name: String,
    qty: Number,
    avg:Number,
    price: Number,
    net:  String,
    day:  String,
});

const PositionsSchma = new Schema({
    product: String,
      name: String,
      qty: Number,
      avg: Number,
      price: Number,
      net: String,
      day: String,
      isLoss:  Boolean,
});

const userSchema = new Schema({
    email: {
      type: String,
      required: [true, "Your email address is required"],
      unique: true,
    },
    username: {
      type: String,
      required: [true, "Your username is required"],
    },
    password: {
      type: String,
      required: [true, "Your password is required"],
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    order:[
    {type: mongoose.Schema.ObjectId,
    ref:"Order"}
    ]
  });

  userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });

   

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

 

 

module.exports = {HoldingSchma,PositionsSchma,userSchema,OrdersSchema};
