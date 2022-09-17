import React from 'react'

const QuoteBox = ({randonQuote}) => {

    console.log(randonQuote);
  return (
    <article className='card'>
        <p className='card__quote'>{randonQuote.quote}</p>
        <h1 className='card__author'>{randonQuote.author}</h1>
        <button>&#62;</button>
    </article>
  )
}

export default QuoteBox