'use strict';

const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: {
        type: String,
        min: 36,
        max: 36
    },
    name: String,
    description: String,
    members: Array 
});

module.exports = mongoose.model('eventsDb', schema);
