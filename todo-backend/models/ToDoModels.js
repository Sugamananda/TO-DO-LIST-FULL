const mongoose = require('mongoose');

// Define the schema
const toDoSchema = new mongoose.Schema({
    text: { 
        type: String, 
        required: true 
    }
});

const ToDo = mongoose.model("ToDo", toDoSchema);
module.exports = ToDo;

