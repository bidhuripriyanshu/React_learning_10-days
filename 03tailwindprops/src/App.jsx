import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-blue-400'>Tailwind Test</h1>
    <Card username="priyanshu" btnText="click Me"/>
    </>
  )
}

export default App
