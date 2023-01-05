import React from 'react'
import FriendsListModal from '../../components/FriendsListModal'
import SmUpwardScreen from './bigscreenprofile/SmUpwardScreen'
import XsScreenSize from './mobileprofile/XsScreenSize'

const ActiveUserProfile = () => {
  return (
    <>
      <XsScreenSize />
      <SmUpwardScreen />
      <FriendsListModal />
    </>
  )
}

export default ActiveUserProfile