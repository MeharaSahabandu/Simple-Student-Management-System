import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AllStudents() {

    const [students, setStudents] = useState([]);

    return (
        <div>
            <center>
                <h2>All Students</h2>
            </center>
        </div>
    )
}
