const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const { HoldingModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsMode");
const { UserModel } = require("./models/UserModel");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/Authroute");
const orderModel = require("./models/OrderModel");
const jwt = require('jsonwebtoken');

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3002;

// Middleware configuration
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);
// Authentication middleware
 


// Routes
app.get("/",(req,res)=>{
    res.send("server Listing");
})

app.get("/allHoldings", async (req, res) => {
    try {
        const allHoldings = await HoldingModel.find({});
        res.json(allHoldings);
    } catch (error) {
        console.error("Error fetching holdings:", error);
        res.status(500).send("Failed to fetch holdings.");
    }
});

app.get("/allPositions", async (req, res) => {
    try {
        const allPositions = await PositionsModel.find({});
        res.json(allPositions);
    } catch (error) {
        console.error("Error fetching positions:", error);
        res.status(500).send("Failed to fetch positions.");
    }
});

app.get("/newOrder", async (req, res) => {
    console.log(req.user);
    try {
        const allOrder = await orderModel.find({});
        res.json(allOrder);
    } catch (err) {
        console.log("Error on Order fetching details", err);
        res.status(500).send("Failed to fetch orders.");
    }
});

app.post("/newOrder", async (req, res) => {
    
    try {
       

        let newOrder = new orderModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });

        await newOrder.save();
         

        await UserModel.findByIdAndUpdate(
            req.user.id,
            { $push: { orders: newOrder._id } }
        );

        res.status(201).send("Order saved successfully!");
    } catch (error) {
        console.error("Error saving order:", error);
        res.status(500).send("Failed to save the order.");
    }
    
});
app.listen(PORT, () => {
    console.log("App Started");
    mongoose.connect(MONGO_URL);
    console.log("DB Connection successful!");
}  
     
)