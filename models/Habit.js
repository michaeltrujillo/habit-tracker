const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    numberOfDays: {
        type: Number,
        required: true
    },
    days: {
        type: Array
    },
    beginDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    completed: {
        type: Boolean,
        default: false
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Habit", HabitSchema);