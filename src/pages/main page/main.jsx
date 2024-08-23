import React from "react";
import List from "../../components/listItem.jsx";
import "./main.css";

function main() {
  return (
    <div className="mainBox">
      <div className="heading">To-Do List</div>
      <div className="inputBox">
        <input />
        <button> + </button>
      </div>

      <div className="listItems">
        <List title="Egg" id="task1"></List>
        <List title="Mutta" id="task2"></List>
        <List title="Anda" id="task3"></List>
      </div>
    </div>
  );
}

export default main;
