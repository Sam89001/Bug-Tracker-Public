const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    projectid: {
        type: String,
        required: true
    },
    groupName: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Group', groupSchema)