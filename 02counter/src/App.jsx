import {useState} from 'react'
import './App.css'
function App() {
  const [counter,setCounter]=useState(15)

//  const counter =15
const addValue =()=>{
   console.log('clicked',counter)
  //  counter = counter+1;
  setCounter(prevCounter=>prevCounter+1) 
  setCounter(prevCounter=>prevCounter+1) 
  setCounter(prevCounter=>prevCounter+1) 
  setCounter(prevCounter=>prevCounter+1) 
  setCounter(prevCounter=>prevCounter+1) 
}

const removeValue =()=>{
  console.log("value:",counter);
  setCounter(counter-1);
}

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Count value is {counter}</h2>
     
     <button onClick={addValue}>Increment{counter}</button>
     <button onClick={removeValue}>Decrement{counter}</button>
      </>
  )
}

export default App
