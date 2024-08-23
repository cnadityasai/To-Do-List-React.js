import React from "react";
import "./listItem.css";

const listItem = (props) => {
  const title = props.title;
  const id = props.id;
  return (
    <div class="item">
      <input type="checkbox" id={id}></input>
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default listItem;
