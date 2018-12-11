var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var ToDoContentSchema = new Schema({
    todo:{ type:String},
    priority: {type: String, enum: ['High', 'Medium', 'Low']},
    done: { type: Boolean, default: false}
});
module.exports = Mongoose.model('ToDosContent', ToDoContentSchema);