const mongoose = require('mongoose')

const sprintSchema = new mongoose.Schema({
    projectid: {

    },
    sprintName: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Sprint', sprintSchema)