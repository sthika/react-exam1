import React from 'react'

const Card = ({data, currency}) => {

  return (
    <div className="card">
        <p>Date: {data.date}</p>
        <p>Base: {data.base}</p>
        <p>{currency}:</p>
        <button>See all</button>
    </div>
  )
}

export default Card