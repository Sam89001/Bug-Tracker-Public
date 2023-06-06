const mongoose = require('mongoose')

const groupMemberSchema = new mongoose.Schema({
   projectid: {

    },
    SectionName: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('GroupMember', groupMemberSchema)