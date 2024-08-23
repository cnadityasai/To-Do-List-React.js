import React, { useState } from "react";
import List from "../../components/listItem.jsx";
import "./main.css";

function Main() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addItem() {
    if (inputValue.trim() === "") return;
    const list = {
      id: `task${items.length + 1}`,
      title: inputValue,
    };

    setItems([...items, list]);
    setInputValue("");
  }

  function changeInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="mainBox">
      <div className="heading">To-Do List</div>
      <div className="inputBox">
        <input
          placeholder="Add a new task"
          value={inputValue}
          onChange={changeInput}
        />
        <button onClick={addItem}> + </button>
      </div>

      <div className="listItems">
        {items.map((item) => (
          <List key={item.key} id={item.id} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default Main;
