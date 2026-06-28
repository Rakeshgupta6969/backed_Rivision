const mongoose = require("mongoose");

  async function  connectDB(){
   await mongoose.connect("mongodb+srv://Rakesh:MuuNLnKZcXTk2mE0@backendrivisioncluster.z8nwlmn.mongodb.net/halley");
   console.log("Database is connected successfully");
}

module.exports = connectDB;