const router = require("express").Router();
const Booking = require("../models/Booking");

/* CREATE BOOKING */
router.post("/create", async (req, res) => {
  try {
    const {
      customerId,
      hostId,
      listingId,
      userDetails, // Extract userDetails from the request body
    } = req.body;

    // Create a new booking with the required fields
    const newBooking = new Booking({
      customerId,
      hostId,
      listingId,
      userDetails, // Include userDetails in the booking document
    });

    await newBooking.save();
    res.status(200).json(newBooking);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Failed to create a new booking!",
      error: err.message,
    });
  }
});

module.exports = router;
