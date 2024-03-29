const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({

    name:{
        type: String,
        required: true
    },

    gender:{
        type: String,
        
    },

    age:{
        type: Number,
        required: true
    }
})

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;