const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    stdID:{
        type: String,
        required: true,
        unique: true,
    },

    name: {
        type: String,
        required: true,
    },

    age:{
        type: Number,
        required: true,
    },

    /*
    phone:{
        type: Number,
        required: true,
        maxSize: 10,
    },
*/

    gender:{
        type: String,
        required: true,
    }

})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;