const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    duty: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true,
        unique: true
    }
});

const Staff = mongoose.model('Staff', StaffSchema);

module.exports = Staff;
