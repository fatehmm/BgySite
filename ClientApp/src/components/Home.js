import React, {Component, useState} from 'react';
import axios from 'axios'
import {useNavigate} from "react-router-dom";

export default function Home() {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    async function usernameSetter () {
        localStorage.setItem("username", JSON.stringify(username));
        const response = await axios.get('https://bgy-site-users-default-rtdb.firebaseio.com/users.json')
        let users = Object.entries(response.data);
        let userInDb = users.find(user => user.username === username);
        console.log('userInDb',  userInDb)
        if(!userInDb){
            
        }
        navigate("/counter")
        
    }
    return(
        <>
        <h3>sen kimsen?</h3>
            <input onChange={(e)=> setUsername(e.target.value)} className="form form-control" type="text" placeholder="adivi yaz (evvel isletdiyin ad varsa onu yaz gir)"/>
            <button onClick={usernameSetter} className="btn btn-success mt-2"> men bu sexsem iceri al indi meni </button>
        </>
    )
}