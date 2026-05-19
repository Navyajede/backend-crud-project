const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://yt:fTKAKYlbuz9CFD37@cluster0.5zk6esg.mongodb.net/halley");

    console.log("Database connected");

}

module.exports = connectDB;