const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    username: mongoose.SchemaTypes.String,
    guildID: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    redeemedCode: {
        type: mongoose.SchemaTypes.Boolean,
        default: false,
    },
})

module.exports = mongoose.model('User', userSchema)