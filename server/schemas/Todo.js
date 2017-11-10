var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    _description: { type: String, required: true },
    _checked: { type: Boolean, required: true}
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;