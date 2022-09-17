
import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'

function App() {
  
 

  //calculamos un elemento random...creamos una funcion
  //el Math.floor redondea hacia abajo, recuerda q necesitamos q nos devuelva el indice
  const getIndexRandom = arr =>{
    return Math.floor  (Math.random() * arr.length)
  }

  //firstElement trae a un objeto del arreglo aleatoriament
  const firstElement = quotes[getIndexRandom(quotes)]

//LA INFORMACION QUE CALCULAMOS AQUI, TENEMOS QUE PASARLE AL COMPONENTE <QuoteBox />
  const [randonQuote, setrandonQuote] = useState(firstElement)
  console.log(firstElement);

  return (
    <div className="App">
   
      <h1>ENTREGABLE 1</h1>
      {/* CON LAS PROPS PASAMOS LA INFORMACION AL COMPONENTE */}
      <QuoteBox randonQuote={randonQuote} />
    </div>
  )
}

export default App
