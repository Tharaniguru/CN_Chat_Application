import React from 'react'
import "./myStyles.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';


export default function ChatArea() {
  return (
    <div className='chatArea-container'>
        <div className='chatArea-header'>
          <div className='conversation-container'>
            <p className='con-icon'>T</p>
            <p className="con-title">Tharani</p>
            <p className="con-timeStamp">2.15 pm</p>
            
            </div>
            <div><IconButton><DeleteIcon/></IconButton></div>
            
        </div>

        
        <div className='charArea-display'>chat container</div>


        <div className='chatArea-message-box'>
        {/* <SendIcon/> */}
        <AttachFileIcon/>
        <input placeholder='Message' className='chatArea-message'/>    

        <div className='type-of-message'><MicIcon/></div>    
      </div>
      
      
         
      </div> 
  )
}
