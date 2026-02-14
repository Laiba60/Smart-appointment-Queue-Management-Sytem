// app.js
const express = require("express");
const cors = require("cors");

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes



// Test route
app.get("/", (req, res) => {
  res.send("API Running");
});

module.exports = app;
