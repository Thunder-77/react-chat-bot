import React from 'react'
import "./chats.css"

const Chats = (props) => {
  var reply =props.reply;
  var msg = props.send;

    return ( 
      <>
        <div className="divR"> <p className='message reply'> Hey! I am devBot. I Can help you with any programming language</p></div>
        <div className="divR"> <p className='message reply'>{reply}</p></div>  
        <div className="divS"> <p className='message sent'>{msg}</p></div>
      </>
   )
}

export default Chats;
