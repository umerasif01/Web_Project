// Import required modules
const mongoose = require('mongoose');

// Define RoomBooking schema
const roomBookingSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: true
  },
  rollNumber: {
    type: Number,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  }
});

// Create RoomBooking model
const RoomBooking = mongoose.model('RoomBooking', roomBookingSchema);

module.exports = RoomBooking;
