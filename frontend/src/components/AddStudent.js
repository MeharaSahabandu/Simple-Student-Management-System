import React, { useState } from "react";


export default function AddStudent() {

    return (

        <div>

            <br></br><br></br>

            <center>
                <h3>Add Student</h3>
            </center>



            <div className="addStudent">

            <form >

                <div class="form-group">
                    <label for="exampleInputName">Name </label>
                    <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Full Name"></input> 
                </div>
                <br></br>

                <div class="form-group">
                    <label for="exampleInputGender">Gender</label>
                    <input type="text" class="form-control" id="exampleInputGender" placeholder="Gender"></input>
                </div>
                <br></br>
                
                <div class="form-group">
                    <label for="exampleInputAge">Age</label>
                    <input type="text" class="form-control" id="exampleInputAge" placeholder="Age"></input>
                </div>

                <br></br>

                <center><button type="submit" class="btn btn-primary">Submit</button></center>

            </form>

            </div>



        </div>

    )
}
