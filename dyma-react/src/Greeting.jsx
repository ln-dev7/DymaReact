import React from 'react'

function Greeting({name, age, children}) {
  return (
    <div>
        <h1>{name} - {age}</h1>
        {children}
    </div>
  )
}

export default Greeting