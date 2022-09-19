
import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import BtnColor from './components/BtnColor'
import quotes from './json/quotes.json'
import color from './utils/color'

function App() { 

  //calculamos un elemento random...creamos una funcion
  //el Math.floor redondea hacia abajo, recuerda q necesitamos q nos devuelva el indice
  const getIndexRandom = arr =>{
    return Math.floor  (Math.random() * arr.length)
  }

  //firstElement trae a un objeto del arreglo aleatoriament
  const firstElement = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

//LA INFORMACION QUE CALCULAMOS AQUI, TENEMOS QUE PASARLE AL COMPONENTE <QuoteBox />
  const [randonQuote, setrandonQuote] = useState(firstElement)
  const [randonColor, setrandonColor] = useState(firstColor) 
  
  const backgroundObject= {
    backgroundColor: randonColor
   }
//Esta funcion calcula un quote y color randon
   const getRandonAll= ()=>{
    setrandonQuote(quotes[getIndexRandom(quotes)])
    setrandonColor(color[getIndexRandom(color)])
   }

   
  return (
    <div style={backgroundObject} className="App">
   
  
      {/* CON LAS PROPS PASAMOS LA INFORMACION AL COMPONENTE */}
      <QuoteBox 
         randonQuote={randonQuote}
         randonColor={randonColor}
        
      />
      <BtnColor 
       getRandonAll={getRandonAll}
      />
    </div>
  )
}

export default App
