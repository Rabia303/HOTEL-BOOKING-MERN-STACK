const mongoose = require("mongoose");

const RoomBookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "AddUser", required: true }, 
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  guests: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  status: { type: String, default: "pending" },
  roomType: { type: String, required: true },
  roomNumber: { type: Number, required: true },
});

const RoomBooking = mongoose.model("RoomBooking", RoomBookingSchema);
module.exports = RoomBooking;
