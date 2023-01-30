import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AddStudent() {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    const navigate = useNavigate();



    function sendData(e) {
        e.preventDefault();

        const newStudent = {
            name,
            gender,
            age
        }


        axios.post("http://localhost:8070/student/add", newStudent).then(() => {
            navigate('/')

        }).then(() => {

            alert("Student Added Successfully")
        }).catch((err) => {
            alert(err);
        })



    }


    return (

        <div>

            <br></br><br></br>

            <center>
                <h3>ADD NEW STUDENT</h3>
                <br></br>
            </center>



            <div className="addStudent">

                <form onSubmit={sendData}>

                    <div class="form-group">
                        <label for="exampleInputName">Name </label>
                        <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Full Name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}></input>
                    </div>
                    <br></br>

                    <div class="form-group">
                        <label for="exampleInputGender">Gender</label>
                        
                        <select class="form-control form-control-sm">
                        <option placeholder="Gender">--</option>
                            <option placeholder="Gender">Female</option>
                            <option placeholder="Gender">Male</option>
                        </select>
                    </div>
                    <br></br>

                    <div class="form-group">
                        <label for="exampleInputAge">Age</label>
                        <input type="text" class="form-control" id="exampleInputAge" placeholder="Age" onChange={(e) => {
                            setAge(e.target.value);
                        }}></input>
                    </div>

                    <br></br>

                    <center><button type="submit" class="btn" className="subB">Submit</button></center>

                </form>

            </div>



        </div>

    )
}
