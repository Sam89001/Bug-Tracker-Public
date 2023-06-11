const mongoose = require('mongoose')

const sprintSchema = new mongoose.Schema({
    projectid: {
        type: String,
        required: true
    },
    sprintName: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Sprint', sprintSchema)