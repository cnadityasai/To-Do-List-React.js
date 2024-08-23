import React, { useState } from "react";
import List from "../../components/listItem.jsx";
import "./main.css";

function Main() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() === "") return;

    const newItem = {
      id: `task${items.length + 1}`,
      title: inputValue,
    };

    setItems([...items, newItem]);
    setInputValue("");
  };

  return (
    <div className="mainBox">
      <div className="heading">To-Do List</div>
      <div className="inputBox">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addItem}> + </button>
      </div>

      <div className="listItems">
        {items.map((item) => (
          <List key={item.id} title={item.title} id={item.id}></List>
        ))}
      </div>
    </div>
  );
}

export default Main;
