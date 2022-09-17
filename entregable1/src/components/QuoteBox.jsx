import React from 'react'

const QuoteBox = ({randonQuote}) => {

    console.log(randonQuote);
  return (
    <article className='card'>
        <p className='card__quote'>{randonQuote.quote}</p>

    </article>
  )
}

export default QuoteBox