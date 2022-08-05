
import CardList from "./CardList";
import SearchBox from './SearchBox'
import React, { useState, useEffect } from "react";

function App(){
const [robots, setRobots] = useState([])
const [searchfield, setsearchfield] = useState('')

useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => setRobots(user))  
})

   const OnSeachChange = (event) =>{
    setsearchfield(event.target.value ) 
    }
        const filterdedRobots = robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        })
        return(
            <div className="tc">
                <h1>Robots</h1>
                <SearchBox SearchChange={OnSeachChange} />
                <CardList robots={filterdedRobots}/>
            </div>
        
        )
    }
export default App;