const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ✅ routes import
const taskRoutes = require("./routes/taskRoutes");

// ✅ use routes
app.use("/api/tasks", taskRoutes);

// test route
app.get("/", (req, res) => {
    res.send("API is working 🚀");
});

// connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});