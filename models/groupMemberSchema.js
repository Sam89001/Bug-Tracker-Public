const mongoose = require('mongoose')

const groupMemberSchema = new mongoose.Schema({
   projectid: {
    type: String,
    required: true
    },
    SectionName: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('GroupMember', groupMemberSchema)