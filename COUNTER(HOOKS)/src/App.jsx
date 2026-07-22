import { useState} from "react";



function App(){

  let [counter, setCounter] = useState(0)

  const addValue = ()=> {
    if (counter < 20) { setCounter(counter+1) }
  }

  const decValue = ()=> {
    if (counter > 0) { setCounter(counter-1) }
  }
  const resetValue =() =>{
    setCounter(0)
  }

 
    return(
      <>
      <h2>Value:{counter}</h2>
      <button
      onClick={addValue}>INCREASE VALUE </button>
      <br/>
      <button
      onClick={decValue}>DECREASE VALUE</button>
      <br/>
      <button
      onClick={resetValue}>RESET VALUE</button>
      </>

    )
}

export default App