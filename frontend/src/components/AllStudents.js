import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";


export default function AllStudents() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8070/student/")
            .then((getStudents) => {
                setStudents(getStudents.data);
            })

    })


    return (
        <div>
            <center>
                <h2>All Students</h2>
            </center>

            <center>
                <table border={1}>
                    <thead>
                        <tr className="topics">
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                        </tr>
                    </thead>

                    {students.map((data) => {
                        return (
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.gender}</td>
                                <td>{data.age}</td>
                            </tr>
                        )
                    })}

                </table>
            </center>
        </div>
    )
}
