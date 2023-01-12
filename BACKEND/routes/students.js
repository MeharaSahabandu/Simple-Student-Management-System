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
    const {name,gender, age} = req.body;

    const updateStudent = {
        name,
        gender,
        age
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(() => {
        res.status(200).send({
            status: "Student updated"})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            status: "Error with updating data", error:err.message
        })
    })

})


/*
router.route("/update/:id").put(async (req, res)=>{
    let userId = req.params.id;
    const {name,NIC,address,contactnumber,Position,username,password} = req.body;

    const updateEmployee = {
        name,
        NIC,
        address,
        contactnumber,
        Position,
        username,
        password
    }

    const update = await Employee.findByIdAndUpdate(userId,updateEmployee).then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})*/


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


//get one data
router.route('/get/:id').get(async (req, res) => {
    let userId = req.params.id;
    const user = await Student.findById(userId).then((student) => {
        res.status(200).send({
            status: "User fetched", student
        })
        
    }).catch((err) => {
        console.log(err.message);

        res.status(500).send({
            status: "Error with get user", error:err.message
        })
    })

})


module.exports=router;

