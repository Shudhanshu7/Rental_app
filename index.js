const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

app.get('/', (req, res) => {
  res.send("Welcome to the Home Renting API");
});


const authRoutes = require("./routes/auth.js")
const listingRoutes = require("./routes/listing.js")
const bookingRoutes = require("./routes/booking.js")
const userRoutes = require("./routes/user.js")

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

/* Routes */
app.use("/api/auth",authRoutes)
app.use("/api/properties",listingRoutes)
app.use("/api/bookings", bookingRoutes)
app.use("/api/users", userRoutes)

/*Mongoose setup*/
const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URL, {
  dbName: "Dream_Nest",  // Specify database name explicitly here
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Successfully connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
})
.catch((err) => console.log(`MongoDB connection error: ${err.message}`));

