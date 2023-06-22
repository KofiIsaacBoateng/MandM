import React, {useContext} from 'react'
import AuthNavigation from './Auth'
import BossTabs from './Boss'
import RiderNavigation from './Rider'
import {userContext} from '../context/userContext'


const index = () => {
     const {user}  = useContext(userContext)
  return (
    user?.role === 'admin' ? (
          <BossTabs />
    ): 

    user?.role === 'rider' ? (
          <RiderNavigation />
    ): 

          <AuthNavigation />
  )
}

export default index
 