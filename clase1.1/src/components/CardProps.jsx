import React from 'react'

const CardProps = ({title, color, list}) => {
    console.log(list);

    const objectColor={
        color:'white',
        backgroundColor: color
    }
  return (
    <article className= 'card' style={objectColor}>
        <h2 >{title}</h2>
        <ul>
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
          
        </ul>
    </article>
    
  )
}

export default CardProps