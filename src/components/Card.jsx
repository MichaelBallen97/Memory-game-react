import React from 'react'

function Card({card, handleSelect}) {
  const {id, color, name, state} = card
  

  return (
    <article className={state} onClick={()=> handleSelect(id, name)}>
      <div className="card-content">
        <div className="front"></div>
        <div className="back" style={{backgroundColor: color}}> <span> { name } </span> </div>
      </div>
    </article>
  )
}

export default Card
