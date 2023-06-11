const mongoose = require('mongoose')

const bugSchema = new mongoose.Schema({
    projectId: {
        type: String,
        required: true
    },
    sectionId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('Bugs', bugSchema)