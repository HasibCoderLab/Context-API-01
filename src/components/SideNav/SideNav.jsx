import React, { useContext } from 'react'
import LastNav from '../LastNav/LastNav'
import { CountContext } from '../../App'


const SideNav = () => {
  const useCount =  useContext(CountContext)
  return (
    <div>
      <LastNav></LastNav>
      <p>SideNav - {useCount} </p>
      </div>
  )
}

export default SideNav