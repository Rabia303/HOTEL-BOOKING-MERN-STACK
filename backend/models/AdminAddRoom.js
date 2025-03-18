const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  roomId: { 
    type: mongoose.Schema.Types.ObjectId, 
    auto: true 
  },
  roomName: {
    type: String,
    required: true,
  },
  roomDescription: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  roomSize: {
    type: Number,
    required: true,
  },
  occupancy: {
    type: Number,
    required: true,
  },
  view: {
    type: String,
    required: true,
  },
  smokingAllowed: {
    type: Boolean,
    required: true,
  },
  bedSize: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  roomService: {
    type: Boolean,
    required: true,
  },
  swimmingPool: {
    type: Boolean,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  roomImage: {
    type: String,
    required: false,
  },
});

const Room = mongoose.model("Room", RoomSchema);
module.exports = Room;
