import React from 'react'

const QuoteBox = ({randonQuote,randonColor,getRandonAll}) => {

   // console.log(randonQuote);
    const colorObject ={
      color: randonColor
    }
    const colorObjButton={
      backgroundColor: randonColor
    }
  return (
    <article style={colorObject} className='card'>
        <p className='card__quote'>{randonQuote.quote}</p>
        <h1 className='card__author'>{randonQuote.author}</h1>
        <button 
          className='card__btn' 
          style={colorObjButton}
          onClick={getRandonAll}
          >&#62;</button>
    </article>
  )
}

export default QuoteBox