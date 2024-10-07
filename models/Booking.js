const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    hostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    listingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
    },
    userDetails: {
      type: String, // This field will store the user's text input
      required: true,
    },
  },
  { timestamps: true } // Automatically manages createdAt and updatedAt fields
);

const Booking = mongoose.model("Booking", BookingSchema); // Corrected mongoose.model instead of mongoose.module
module.exports = Booking;
