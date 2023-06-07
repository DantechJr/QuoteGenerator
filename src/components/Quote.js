import React from 'react'

function Quote({ quote }) {
  return (
    <div className='quote'>
        <div className='id' title={quote.id}>
          { quote.id }
        </div>

        <blockquote>
          { quote.quote }
        </blockquote>

        <div className='author' title={quote.author}>
          {quote.author}
        </div>
    </div>
  )
}

export default Quote