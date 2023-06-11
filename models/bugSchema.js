const mongoose = require('mongoose')

const bugSchema = new mongoose.Schema({
    projectId: {
        type: String,
        required: true
    },
    sprintId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    bugName: {
        type: String,
        required: true
    },
    bugSummary: {
        type: String,
        required: true
    },
    bugPriority: {
        type: String,
        required: true
    },
    bugType: {
        type: String,
        required: true
    },
    bugArea: {
        type: String,
        required: true
    },
    bugAssignedToo: {
        type: String,
        required: true
    },
    bugTimeFrame: {
        type: String,
        required: true
    },
    bugProgress: {
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model('Bugs', bugSchema)