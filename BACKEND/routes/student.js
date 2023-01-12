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
    let userId = req.params.id;
    const {
        name,
        age, 
        gender
    } = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(() => {
        res.status(200).send({
            status: "User updated", user:update})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            status: "Error with updating data", error:err.message
        })
    })

})


//delete data
router.route('/delete/:id').delete(async (req, res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(() => {
        res.status(200).send({
            status: "User deleted"
        })

    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({
            status: "Error with deleting data", error:err.message
        })
    })
})


module.exports=router;

