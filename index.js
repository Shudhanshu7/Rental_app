const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

// Base route handler
app.get('/', (req, res) => {
  res.send("Welcome to the Home Renting API");
});

// Importing route handlers
const authRoutes = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js");
const bookingRoutes = require("./routes/booking.js");
const userRoutes = require("./routes/user.js");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

/* Routes */
app.use("/auth", authRoutes);
app.use("/properties", listingRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);

/* Mongoose setup */
const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URL, {
  dbName: "Dream_Nest",  // Specify database name explicitly
})
.then(() => {
  console.log("Successfully connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
})
.catch((err) => console.log(`MongoDB connection error: ${err.message}`));


