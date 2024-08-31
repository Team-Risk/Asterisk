const mongoose = require('mongoose');

const codeList = new mongoose.Schema ({
    serverguildID: {
        type: mongoose.SchemaTypes.Number,
        required: true,
    },
    codes: {
        type: mongoose.SchemaTypes.Array,
        default: false,
    },
})

module.exports = mongoose.model('serverCodeList', codeList)