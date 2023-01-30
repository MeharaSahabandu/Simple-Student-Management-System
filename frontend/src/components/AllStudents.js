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
                <br></br>
                <h2>All Students</h2>
                <br></br>
            </center>

            <center>
                <table border={1}>
                    <thead>
                        <tr className="topics">
                            <th className="nameT" >Name</th>
                            <th className="nameT"> Gender</th>
                            <th className="nameT">Age</th>
                        </tr>
                    </thead>

                    {students.map((data) => {
                        return (
                            <tr >
                                <td className="nameT">{data.name}</td>
                                <td className="nameT">{data.gender}</td>
                                <td className="nameT">{data.age}</td>
                            </tr>
                        )
                    })}

                </table>
            </center>
        </div>
    )
}
