import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>
<div className='card shadow-lg font-medium p-2 hover:-translate-y-2 cursor-pointer '>

  {/* <img className='h-40' src = "#" alt ="image"/> */}
  <h1>Name: lorem ipsum</h1>
  <h1>Rating: 5</h1>
  <h1>Year:2005</h1>
</div>

    </div>
  )
}

export default Card