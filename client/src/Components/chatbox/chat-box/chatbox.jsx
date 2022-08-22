import React, {useState} from "react";
import { useCallback } from "react";
import "./chatbox.css";
import Reply from "../reply-space/reply-space";
import Send from "../send-space/send-space";

 const Chatbox = () => {

  const [message,setmessage] =useState("");

  const handelFunction= useCallback((data)=>
  {
    setmessage(data);
    console.log("the input text is", data);
    setmessage(data);
  });

  
  return (
      <div className="card card-board mx-auto mt-5 ml-9 bg-dark ">
        <div className="card-title mt-2">
          <span>DevBot</span>
        </div>
        <div className="card-body">
          <div className="reply-div">
          <Reply msg={message} />
          </div>
          <div className="send-div">
          <Send handelFunction ={handelFunction}/>
          </div>
        </div>
      </div>
  );
};
export default Chatbox;
