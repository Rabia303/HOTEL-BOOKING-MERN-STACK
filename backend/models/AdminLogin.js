const mongoose = require('mongoose');

const AdminLoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminLogin = mongoose.model('AdminLogin', AdminLoginSchema);

module.exports = AdminLogin;