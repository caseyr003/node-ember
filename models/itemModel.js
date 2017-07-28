var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: String,
    isCool: Boolean,
});

var Items = mongoose.model('Items', itemSchema);

module.exports = Items;
