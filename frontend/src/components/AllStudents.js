import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function AllStudents() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        function getStudents(){
            axios.get("http://localhost:8070/student/")
        }
    },[])


    return (
        <div>
            <center>
                <h2>All Students</h2>
            </center>
        </div>
    )
}
