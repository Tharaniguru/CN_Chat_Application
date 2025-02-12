import React from 'react'
import "./myStyles.css"
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@mui/material"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ConversationsItem from './ConversationsItem';

export default function Sidebar() {

  const [conversations,setConversations] = useState([
    {
      name:"swetha",
      lastMessage: "hi",
      timeStamp:"today",
    },
    {
      name:"swathi",
      lastMessage:"hello",
      timeStamp:"today",
    }
  ])




  return (
    <div className='sidebar-container'>


      <div className='sb-header'>
        <div>
          <IconButton> 
          <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton> 
          <PersonAddAlt1Icon />
          </IconButton>
          <IconButton> 
          <GroupAddIcon />
          </IconButton>
          <IconButton> 
          <AddCircleIcon />
          </IconButton>
          <IconButton> 
          <NightlightIcon />
          </IconButton>
        </div>
      </div>



      <div className='sb-search'>
        <IconButton> <SearchIcon /></IconButton>
        <input placeholder='Search' className='search-box'/>
      </div>


      <div className='sb-conversation'>
        {conversations.map((conversation)=>{
          return <ConversationsItem {...conversation}/>
        })}
        
      </div>


    </div>
  )
}
