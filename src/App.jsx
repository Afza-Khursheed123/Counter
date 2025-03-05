import { useState } from 'react';
import './App.css'





function App() {
  const [counter,setCounter]=useState(0);
  const addvalue=()=>{
    setCounter(counter+1);
    
    }  
    const removevalue=()=>{
      setCounter(counter-1);
      
      }
  return (
    <>
      
      <h1>Let's count?</h1>
    <h3>Counter: {counter}</h3>
    <div><button  onClick={addvalue}>Add value</button>
<p></p>
    <button onClick={removevalue}>Remove value</button>
    </div>
    </>
  )
}

export default App
