const mongoose = require("mongoose");

const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://prakashdey46:O92SySNttMLYUOCJ@freshveg.18k0u.mongodb.net/restaurant_management")
}

module.exports = {connectDB};