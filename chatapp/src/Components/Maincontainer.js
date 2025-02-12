import React from 'react'
import "./myStyles.css"
import Sidebar from './Sidebar'
import Workarea from './Workarea'
export default function Maincontainer() {
  return (
    <div className='main-container'>
      <Sidebar/>
      <Workarea/>
    </div>
  )
}

