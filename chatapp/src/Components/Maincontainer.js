import React from 'react'
import "./myStyles.css"
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
export default function Maincontainer() {
  return (
    <div className='main-container'>
      <Sidebar/>
      <ChatArea/>
    </div>
  )
}

