import React, { useState } from "react";

import axios from "axios";


export default function RegEmp() {

    const [name, setName] = useState("");
    const [NIC, setNIC] = useState("");
    const [address, setAddress] = useState("");
    const [contactnumber, setPhone] = useState("");
    const [Position, setPosition] = useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    function sendData(e){

        e.preventDefault();
        
        const newEmployee={
            name,
            NIC,
            address,
            contactnumber,
            Position,
            username,
            password

        }

            axios.post("http://localhost:8070/employee/add",newEmployee).then(()=>{
                alert("Employee Added") 
                /*setName("");
                setNIC("");  
                setAddress("");
                setPhone("");
                setPosition("");
                setUsername("");
                setPassword("");*/

            }).catch((err)=>{
                alert(err)
            })
    }


}