const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const { HoldingModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsMode");
const cors = require("cors");
const { json } = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/Authroute");
const UserModel = require("./models/UserModel");


const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3002 ;

app.use(cors({ origin: ["https://stock-trading-project.onrender.com/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,}));
    app.use(cors({ origin: ["http://localhost:3001"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,}));
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);


app.get("/allHoldings",async(req,res)=>{
    const allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions",async(req,res)=>{
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
})
 
app.listen(PORT,()=>{
    console.log("App Started");
    mongoose.connect(MONGO_URL);
    console.log("DB Connection successful!");
}  
     
)
