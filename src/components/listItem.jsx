import React, { useState } from "react";
import "./listItem.css";

const ListItem = (props) => {
  const title = props.title;
  const id = props.id;
  const [check, setCheck] = useState(false);

  function handleChange() {
    setCheck(!check);
  }

  return (
    <div class="item">
      <input
        type="checkbox"
        id={id}
        checked={check}
        onChange={handleChange}
      ></input>
      <label
        style={{ textDecoration: check ? "line-through" : "None" }}
        htmlFor={id}
      >
        {title}
      </label>
    </div>
  );
};

export default ListItem;
