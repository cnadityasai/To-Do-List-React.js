import React, { useState } from "react";
import "./listItem.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import binIcon from "../images/bin.png";

const ListItem = (props) => {
  const { title, id, onDelete } = props;
  const [check, setCheck] = useState(false);

  function handleChange() {
    setCheck(!check);
  }

  function handleDelete() {
    if (onDelete) {
      onDelete(id);
    }
  }

  return (
    <div class="fullBox">
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
      <div className="deleteIcon" onClick={handleDelete}>
        <img src={binIcon} alt="delete icon" className="deleteImage"></img>
      </div>
    </div>
  );
};

export default ListItem;
