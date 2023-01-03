const router= require('express').Router();

let Student = require('../models/Student.js');



//add student
router.route('/add').post((req, res) => {
    const stdID = req.body.stdID;
    const name = req.body.name;
    const age = Number(req.body.age);
    //const phone = Number(req.body.phone);
    const gender = req.body.gender;

    const newStudent = new Student({
        stdID,
        name,
        age,
        //phone,
        gender
    })

    newStudent.save().then(() => {
        res.json('Student added')
    }).catch((err) => {
        console.log(err);
    })

})




//get all students
router.route('/').get((req, res) => {
    Student.find().then((students) => {
        res.json(students)
    }).catch((err) => {
        console.log(err);
    })

})



//get student by id
router.route('/:id').get((req, res) => {
    
    let id = req.params.id;
    Student.findById(id).then((student) => {
        res.json(student)
    }).catch((err) => {
        console.log(err);
    })

})



//delete student
router.route('/delete/:id').delete(async (req, res) => {

    let id = req.params.id;
    await Student.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Student deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting data", error: err.message});
    })

})




//update student
router.route('/update/:id').put(async (req, res) => {

    let id = req.params.id;
    const {stdID, name, age,  gender} = req.body;

    const updateStudent = {
        stdID,
        name,
        age,
        //phone,
        gender
    }


    const update = await Student.findByIdAndUpdate
    (id, updateStudent).then(() => {
        res.status(200).send({status: "Student updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})



//export router
module.exports = router;


