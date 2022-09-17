import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    
    const handlePlus=() => {
        if(count + 1 <=5){
         setCount(count + 1)
        }
         
       }
       const handleRest=()=>{
         if(count - 1 >= -3){
           setCount(count - 1)
         }
       } 
       const handleReset=()=> setCount(count*0)
  return (
    <div>Counter
      <h2>{count}</h2>
      <button onClick={handleRest}>-1</button>    
      <button onClick={handleReset}>Reset</button>
      <button onClick={handlePlus}>+1</button>
    </div>
  )
}

export default Counter