const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },

    //this is testing code V
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('UserAccounts', accountSchema)