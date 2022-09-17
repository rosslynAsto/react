import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
 
  
 const [isTrue, setIsTrue] = useState(false)
 const handleBoolean =() => setIsTrue(!isTrue)
  return (
    <div className="App">
   
    <button onClick={handleBoolean}>Show/Hiden Count</button>
     {
       isTrue ?
        <img src="https://dubaitrippackages.files.wordpress.com/2017/11/2-imgdinosaurs_base.jpg" 
        alt="" />
        //  <Counter />
      :
       <h2>Elemento oculto</h2>
    }  
      
    </div>
  )
}

export default App
