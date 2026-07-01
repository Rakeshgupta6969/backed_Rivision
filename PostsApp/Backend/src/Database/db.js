const mongoose  = require("mongoose");
require("dotenv").config();

async function connectDB(){
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database is connected successfully");
}

module.exports = connectDB;