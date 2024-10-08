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

  function handleKey(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addItem();
    }
  }

  function handleDelete(id) {
    setItems(items.filter((task) => task.id !== id));
  }

  function changeInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="ultiBox">
      <div className="mainBox">
        <div className="heading">To-Do List</div>
        <div className="inputBox">
          <input
            placeholder="Add a new task"
            value={inputValue}
            onChange={changeInput}
            onKeyDown={handleKey}
          />
          <button onClick={addItem}> + </button>
        </div>

        <div className="listItems">
          {items.map((item) => (
            <List
              key={item.key}
              id={item.id}
              title={item.title}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
