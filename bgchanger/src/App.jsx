
import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("black")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <button onClick={() =>setColor("red")}
      className ="bg-red-500 px-3 py-2 rounded" 
      >RED</button>

      <button onClick={() => setColor("blue")}
      className = "bg-blue-500 px-3 py-2 rounded"
      >BLUE</button>

      <button onClick={() => setColor("green")}
      className= "bg-green-500 px-3 py-2 rounded"
      >GREEN</button>

      <button onClick={() => setColor("pink")}
      className = "bg-pink-300 px-3 py-2 rounded"
      >PINK</button>

      <button onClick={() => setColor("violet")}
      className= "bg-violet-500 px-3 py-2 rounded"
      >VIOLET</button>
    </div>
    </>
  )
}

export default App
