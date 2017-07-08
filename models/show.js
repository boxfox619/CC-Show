var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    code: { type: Number, required: true, index: { unique: true } },
    data: { type: String, required: true },
    user: { type: String, required: true }
});

module.exports = mongoose.model('show', userSchema);
