const mongoose = require('mongoose'); 

const MaintenanceRequestSchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: true
    },
    issueDescription: {
        type: String,
        required: true
    },
    priorityLevel: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium',
        required: true
    }
});

const MaintenanceRequest = mongoose.model('MaintenanceRequest', MaintenanceRequestSchema);

module.exports = MaintenanceRequest;
