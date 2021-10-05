"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({
    full_name: String,
    phone_number: String,
    date: String,
    email: String,
    time: String,
    reason: String,
    created: {
        type: Date,
        default: Date.now
    }
});
const Appointment = mongoose.model('Appointment', AppointmentSchema);
exports.default = Appointment;
