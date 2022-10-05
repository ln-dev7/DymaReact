import React from 'react'
import Greeting from './Greeting'

function Hello(props) {
  return (
    <div>
        {/* <h1>Hello {name}</h1>
        <h3>Age : {age}</h3> */}
        <Greeting {...props} >
          Je suis un enfant
        </Greeting>
    </div>
  )
}

export default Hello