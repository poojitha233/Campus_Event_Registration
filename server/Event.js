const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: String,
    location: String,
    description: String,
    registeredStudents: [String] // Array of student IDs
});

module.exports = mongoose.model('Event', EventSchema);