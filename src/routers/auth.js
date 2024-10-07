const express = require("express");
const authRouther = express.Router();
const {restaurantSignupModel} = require("../models/restaurantSignup")

authRouther.post("/auth/signup", async (req,res)=>{
    try{
        validateSignupData(req.body);// Todo : make function
        const {firstName, lastName, gender, restaurantName, city, state,email, password } = req.body;
        

    }catch(err){
        console.log(err.message);
        res.sataus(400).send("ERROR:"+err.message);
    }
})

module.exports = {authRouther};