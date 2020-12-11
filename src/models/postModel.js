const mongoose = require('mongoose');

const Schema = mongoose.Schema;

exports.post = new Schema({
    user_id: {type: String, required: 'Enter a User ID'},
    message: {type: String, required: 'Enter a Message'},
    created_date: {type: Date, default: Date.now}
});