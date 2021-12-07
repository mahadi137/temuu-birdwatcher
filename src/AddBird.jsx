import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
//Importing components
import TitleText from "../src/TitleText";

import "../src/App.css";

export default function TodoInput(props) {
  const [value, onChange] = useState(new Date());
  const birdLinkHandler = (e) => {
    props.setbirdLink(e.target.value);
  };

  const birdNameHandler = (e) => {
    props.setbirdName(e.target.value);
  };

  function submitHandler(e) {
    //e.preventDefault();
    fetch("http://localhost:3010/birds/", {
      method: "POST",
      body: JSON.stringify({
        name: props.birdName,
        imgSource: props.birdLink,
        timestand: value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => response.json());
    props.setbirdName("");
    props.setbirdLink("");
  }

  return (
    <>
      <div className="div-form">
        <form className="input-section">
          <div className="div-tag">
            <TitleText title="Bird Name" />
            <input
              onChange={birdNameHandler}
              value={props.birdName}
              type="text"
              className="tag-input"
            />
          </div>
          <div className="div-todo">
            <TitleText title="Link" />
            <input
              onChange={birdLinkHandler}
              value={props.birdLink}
              type="text"
              className="todo-input"
            />
          </div>
          <Calendar className="mycalender" onChange={onChange} />
        </form>
        <button onClick={submitHandler} className="submit-button" type="submit">
          <span className="fas">+</span>
        </button>
      </div>
    </>
  );
}
