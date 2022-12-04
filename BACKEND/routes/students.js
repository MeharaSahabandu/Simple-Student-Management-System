const router= require('express').Router();
let Student = require('../models/Student.js');



//add student
router.route('/add').post((req, res) => {
    const stdID = req.body.stdID;
    const name = req.body.name;
    const age = Number(req.body.age);
    const phone = Number(req.body.phone);

    const newStudent = new Student({
        stdID,
        name,
        age,
        phone,
    })

    newStudent.save().then(() => {
        res.json('Student added')
    }).catch((err) => {
        console.log(err);
    })

})


//get all students



module.exports= router;
