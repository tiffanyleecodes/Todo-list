import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(() => {
    const saveItems = localStorage.getItem("items");
    if (saveItems) {
      return JSON.parse(saveItems);
    } else {
      return [
        {
          id: 1,
          text: "Finish react course part 32",
        },
        { id: 2, text: "clean toilet" },
        { id: 3, text: "laundry job" },
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, item]);
  };
  const deleteItem = (item) => {
    if (window.confirm("You have done it?")) {
      setItems(items.filter((current) => current.id !== item.id));
    }
  };
  const editItem = (item) => {
    const input = window.prompt("Update your plan:", item.text);
    if (input) {
      setItems(
        items.map((current) => {
          if (current.id === item.id) {
            return { ...current, text: input };
          } else {
            return current;
          }
        })
      );
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addItem={addItem} />
      <TodoList items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default App;
