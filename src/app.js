const express = require("express");
const {connectDB} = require("./config/database");
const {authRouther} = require("./routers/auth");
const app = express();

app.use(express.json());

app.use("/",authRouther);

connectDB().then(()=>{
    console.log("Database connection successful");
    app.listen(3000);
    
}).catch((err)=>{
    console.log("Database connection error");
})


