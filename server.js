const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables from .env file
dotenv.config();

// MongoDB connection
connectDB();

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Import routes
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

// Use routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/ai", aiRoutes);

// Set the port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.DEV_MODE} mode on port ${PORT}`
  );
});
