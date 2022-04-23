
import React, { useState } from 'react'
import "../App.css";

export default function Counter() {
    const [counter,setcounter] =useState(1)
//     const increment=()=>{
// console.log("add one clicked")
// setcounter(counter+1)
//     }
//     const decrement=()=>{
//         console.log("subtract one clicked")
//         if(counter>0){
//             setcounter(counter-1)
//         }
//     }
    const handleChange=(value)=>{
       console.log("handle changed")
        if(counter>-1)
        setcounter(counter+value)
        if(counter==0){
            alert("you cannot go below this refresh your page")
        }
    }
  return (
    // <div className='CounterClasses'>
    <div className={`${(counter%2==0)? "green":"red"}`}>

        <h3>Counter:{counter}</h3>
        {/* <div className={`${(counter%2==0)? "green":"red"}`}> */}
<button onClick={()=>handleChange(1)}>Add One</button>
<button onClick={()=>handleChange(-1)}>Subtract One</button>
        </div>
    // </div>
  )
}
