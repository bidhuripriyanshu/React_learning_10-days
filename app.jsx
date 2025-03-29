import React, { useState } from "react";


const App = () => {
  const submitHandler = (e) => {
      e.preventDefault();
      console.log(username);
      setUsername('');
 }

const [username,setUsername]=useState("");
 
 
   return(
    <div>
      <form onSubmit={ (e) => submitHandler(e)}>
      <input
      value ={username} 
      onChange={(e)=>{
         setUsername(e.target.value);
         
      }} className=" rounded px-4 py-3" type="text" placeholder=" Enter your Name"></input>
      <button className=" px-4 py-3 text-xl font-semibold rounded bg-sky-400">Submit</button>
      </form>
    </div>
  )
};          

export default App
