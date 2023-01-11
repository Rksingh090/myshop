import React, { useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'

const Base = ({children}) => {
    const[showSidebar,setShowSidebar]=useState(false)
  return (
    <div className='grid w-full items-start' style={{gridTemplateColumns: showSidebar?"1fr 5fr": "1fr"}}>
        {showSidebar && <SideBar/>}
        <div>
        <Header vicky={()=>setShowSidebar(!showSidebar)}/>
        <div className='px-[70px]'>
            {children }

        </div>
        </div>
    </div>
  )
}

export default Base