import React from 'react'

function Button({onClick}) {
  return (
    <button onClick={onClick} style={{backgroundColor: 'cyan'}}>Submit</button>
  )
}

export default Button