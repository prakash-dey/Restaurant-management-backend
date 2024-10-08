const express = require("express");
const authRouther = express.Router();
const { RestaurantSignupModel } = require("../models/restaurantSignup");
const {validateSignupData} = require("../validator/validator")

authRouther.post("/auth/signup", async (req, res) => {
  try {
    const {errors, isValid} = validateSignupData(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const {
      firstName,
      lastName,
      gender,
      restaurantName,
      city,
      state,
      email,
      password,
      phoneNumber
    } = req.body;

    const restaurant = new RestaurantSignupModel({
      firstName,
      lastName,
      gender,
      restaurantName,
      city,
      state,
      email,
      password,
      phoneNumber
    });

    const savedRestaurant = await restaurant.save();
    console.log("savedRestaurant",savedRestaurant);
    const token = await savedRestaurant.getJWT();

    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000),
    });
    res.json({ message: "Registration successfully!", data: {firstName,
        lastName,
        gender,
        restaurantName,
        city,
        state,
        email,
        phoneNumber} });
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Something went wrong");
  }
});

module.exports = { authRouther };
