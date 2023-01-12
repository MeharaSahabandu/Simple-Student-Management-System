const router = require('express').Router();
let Student = require('../models/Student');


//adding data
router.route('/add').post((req, res) => {

    const name = req.body.name;
    const gender= req.body.gender;
    const age = Number(req.body.age);

    const newStudent = new Student({
        name,
        gender,
        age
    })

    newStudent.save().then(() => {
        res.json("Student added")
    }).catch((err) => {
        console.log(err);
    })

});



//get all data
router.route('/').get((req, res) => {
    Student.find().then((students) => {
        res.json(students)
    }).catch((err) => {
        console.log(err);
    })
})


//update data
router.route('/update/:id').put(async (req, res) => {
    
})


module.exports=router;

