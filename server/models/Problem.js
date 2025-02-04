const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    input: {
        type: String,
        required: true,
        trim: true,
    },
    output: {
        type: String,
        required: true,
        trim: true,
    },
    constraints: {
        type: String,
        required: true,
        trim: true,
    },
    example_input: {
        type: String,
        required: true,
        trim: true,
    },
    example_output: {
        type: String,
        required: true,
        trim: true,
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },

});

const Problem = mongoose.model('Problem', problemSchema);
module.exports = Problem;