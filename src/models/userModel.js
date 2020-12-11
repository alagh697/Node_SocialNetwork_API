const mongoose = require('mongoose');

const Schema = mongoose.Schema;

exports.user = new Schema({
    username: {type: String, required: 'Enter a username'},
    email: String,
    created_date: {type: Date, default: Date.now}
});