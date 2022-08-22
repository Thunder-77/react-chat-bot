import { doc, getDoc } from "firebase/firestore";
import React ,{useState} from "react";
import { useEffect } from "react";
import { db } from "../../../firebaseconfig/firebaseconfig";
import Chats from "../chat-section/chats";
import "./reply-space.css";

function Reply(props){

  const [reply, setReply] = useState("Hii Nice to meet you");
  const [value, setValue] = useState("");

    useEffect(()=>{
    setValue(props.msg); 
    var cos = value.toUpperCase();
      getDoc(doc(db, "bottext","gJ5YsXnQAKcoGqHYaiTm")).then(docSnap => {
        if(docSnap.data()[cos] !== undefined)
        {
         setReply(docSnap.data()[cos]);
        }
        else if(cos === "")
        {
          setReply(docSnap.data().space);
        }
        else
        {
        setReply(docSnap.data().default);
        }
      }
      );  
    }
    );

    return (

      <>
      <div className="cb">
        <Chats reply={reply} send={value}/>
      </div>
      
      </>

        
    );
}
export default Reply;
