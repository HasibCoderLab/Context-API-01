import React, { useContext } from 'react'
import { CountContext } from '../../App'

const LastNav = () => {
  // const context  = useContext(CountContext);
  const context  =  useContext(CountContext)
  return (
    <div>
      <p>LastNav - {context} </p>

    </div>
  )
}

export default LastNav