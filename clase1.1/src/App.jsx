import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import CardProps from './components/CardProps'
import "./styles/app.css"

function App() {

 const title="Practica JSX"
 const hobbies = ['Ir a la playa', 'Videojuegos', 'Ver pelicula'];
 const favoriteFood = ['Ceviche', 'Papa a la huancaina', 'Juane'];
 const technologies = ['React', 'java', 'C++'];
  return (
    <div className="App">
      <h2>{title}</h2>
      <Card />      
      <CardProps 
         title='Hobbies' 
         color='blue' 
         list={hobbies} 
      />
      <CardProps 
         title='Mi comida favorita' 
         color='red' 
         list={favoriteFood}
      />
      <CardProps 
          title='Mi stack tech' 
          color='green'
           list={technologies}
      />
    </div>
    
  );
}

export default App
