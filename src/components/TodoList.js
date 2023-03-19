import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import "../styles/TodoList.css";

function TodoList({ items, editItem, deleteItem }) {
  if (items.length === 0) {
    return <p>Nothing in here</p>;
  }

  return (
    <div>
      <ul className="list">
        {items.map((item) => {
          return (
            <li className="plan-item" key={item}>
              <span>{item.text}</span>
              <div className="icon">
                <ModeEditIcon className="edit" onClick={() => editItem(item)} />
                <DeleteIcon
                  className="delete"
                  onClick={() => deleteItem(item)}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
