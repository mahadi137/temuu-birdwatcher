import React from "react";

export default function Gallery(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt}></img>
    </div>
  );
}
