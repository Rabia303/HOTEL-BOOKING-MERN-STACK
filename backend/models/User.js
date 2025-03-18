const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    auto: true 
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user", 
  },
});

const AddUser = mongoose.model("AddUser", UsersSchema);

module.exports = AddUser;
