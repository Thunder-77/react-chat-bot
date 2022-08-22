import React, { useState } from "react";
import "./send-space.css";

function Send(props) {
  const [value, setValue] = useState("");

  function initiateChange(value) {
    props.handelFunction(value);
    setValue("");
  }
  return (
    <>
      <div className="send">
        <input
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Update input here"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        ></input>
        <button
          className="sbtn"
          onClick={() => {
            initiateChange(value);
          }}
        >
          Send
        </button>
      </div>
    </>
  );
}
export default Send;
