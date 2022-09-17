import React from 'react'

const Card = () => {
const person={
        name:"Rosslyn",
        age: 30,
        favoriteMovie:"Narnia",
        favoriteMusic:"Na",
}

  return (
    <div className="App">
      <div className="card__des">
      <ul>
        <li><b>Nombre:</b> {person.name}</li>
        <li><b>Edad:</b> {person.age}</li>
        <li><b>Pelicula favorita:</b>  {person.favoriteMovie}</li>
        <li><b>Musica favorita:</b> {person.favoriteMusic}</li>
      </ul>
      </div>
     

    </div>
   
    
  );
}

export default Card