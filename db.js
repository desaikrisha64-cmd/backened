const mongoose = require("mongoose");

async function connectDB() {
  
    await mongoose.connect("mongodb+srv://krishibishi:krishi123@backend1.5k3qqb8.mongodb.net/krisha");

    console.log("Connected to DB ✅");
  } 


module.exports = connectDB;