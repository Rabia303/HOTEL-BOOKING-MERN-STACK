const mongoose = require('mongoose');

const HousekeepingSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    default: "Clean",
  },
  lastCleaned: {
    type: String,
    default: new Date().toLocaleString(),
  },
  nextCleaning: {
    type: String,
    default: "Not scheduled",
  },
  maintenanceIssue: {
    type: String,
    default: "",
  },
});

const Housekeeping = mongoose.model('Housekeeping', HousekeepingSchema);

module.exports = Housekeeping;