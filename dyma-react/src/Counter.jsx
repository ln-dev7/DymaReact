
import React from 'react'

function Counter({count}) {
    console.log("render compteur");
  return (
    <h1>{count}</h1>
  )
}

export default Counter