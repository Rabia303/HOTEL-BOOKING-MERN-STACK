const mongoose = require('mongoose');
const roomTypes = ["Single", "Double", "Suite", "Deluxe", "Family"];
const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link to User Model
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true }, // Room reference
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email format'],
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format']
  },
  checkIn: {
    type: Date,
    required: [true, 'Check-in date is required']
  },
  checkOut: {
    type: Date,
    required: [true, 'Check-out date is required'],
    validate: {
      validator: function(value) {
        return value > this.checkIn;
      },
      message: 'Check-out date must be after check-in date'
    }
  },
  guests: {
    type: Number,
    required: true,
    min: [1, 'At least 1 guest required'],
    max: [5, 'Maximum 5 guests allowed']
  },
  totalPrice: {
    type: Number,
    required: true,
    min: [1, 'Total price must be greater than zero']
  },
  paymentMethod: {
    type: String,
    default: 'cash',  
    enum: ['cash']
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'confirmed', 'cancelled']
  },
  
  roomType: {
    type: String,
    required: true,
    enum: roomTypes, 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  
}, { timestamps: true });


const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;