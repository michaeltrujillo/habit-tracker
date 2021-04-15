const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    habitID: {
        type: String
    }
});

module.exports = mongoose.model("Note", NoteSchema);