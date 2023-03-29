import React, {Component, useEffect, useState} from 'react';
import './Counter.css'
import axios from "axios";

export default function Counter() {
    const [counter, setCounter] = useState(0)
    let username = localStorage.getItem("username");
    let [totalSex, setTotalSex] = useState()
    let buttonClicker = document.getElementById('button-click');
    username = JSON.parse(username);
    useEffect(async function() {
        const response = await axios.get('https://bgy-site-users-default-rtdb.firebaseio.com/users.json')
        let users = Object.entries(response.data);
        console.log(users)
        let userInDb = users.find(user => user[1].username === username);
        console.log(userInDb)
        if(!userInDb){
            const response = await axios.post('https://bgy-site-users-default-rtdb.firebaseio.com/users.json' , {
                username: username,
                sexNumber : 0,

            })
            
        } else {
            const responsePut = await axios.put(`https://bgy-site-users-default-rtdb.firebaseio.com/users/${userInDb[0]}.json`, {
                username: userInDb[1].username,
                sexNumber: userInDb[1].sexNumber + 1
            })
            setTotalSex(userInDb[1].sexNumber)
        }
        
    },[counter, counter])
    function handleClick() {
        setTimeout(() => {
            buttonClicker.disabled = true
        }, 400);
        buttonClicker.disabled = false;
        setCounter(counter+1)
        
        
        
    }
    return (
        <>
            <h3>{username},  bu gun duz <span style={{color: "red"}}>{counter}</span>  defe sex elemisen 🎉</h3>
            {counter >= 100 && counter < 200 && (
                <h3>oybla neynirsen ala</h3>
            )}
            {counter >= 200 && counter < 300 && (
                <h3>canavardi e canavar</h3>
            )}
            {counter >= 300 && counter < 500 && (
                <h3>ala belke biraz yavasliyaq</h3>
            )}
            {counter >= 500  && (
                <h3>gijdillag cingiz xan zadsan?</h3>
            )}
            <button id="button-click" onClick={()=> {handleClick()}}> sex ele 🔥</button>
            <div style={{marginTop: "5rem"}}>
                <h4>total sex sayi: {totalSex}</h4>
                <h5>adminin notu: autoclicker zad isdeden peyserdi</h5>
            </div>
        </>
    )
}
