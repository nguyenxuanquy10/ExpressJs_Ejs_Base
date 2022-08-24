const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    name: {
        type: String, //
        required: true
    },
    age: {
        type: Number, //
        required: true
    },
    address: {
        type: String, //
        required: true
    }
})
const eventModel = mongoose.model('event', eventSchema);

module.exports = eventModel;