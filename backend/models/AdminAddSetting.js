const mongoose = require('mongoose');

const SettingSchema = new mongoose.Schema({
    roomRates: {
        standardRoom: {
            type: Number,
            required: true
        },
        deluxeRoom: {
            type: Number,
            required: true
        },
        suite: {
            type: Number,
            required: true
        }
    },
    taxManagement: {
        serviceTax: {
            type: Number,
            required: true
        },
        VAT: {
            type: Number,
            required: true
        },
        cityTax: {
            type: Number,
            required: true
        }
    },
    hotelPolicies: {
        checkInTime: {
            type: String,
            required: true
        },
        checkOutTime: {
            type: String,
            required: true
        },
        cancellationPolicy: {
            type: String,
            required: true
        },
        petPolicy: {
            type: String,
            required: true
        }
    }
});

const Setting = mongoose.model('Setting', SettingSchema);

module.exports = Setting;