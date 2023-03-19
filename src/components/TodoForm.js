import React, { useState } from "react";
import "../styles/TodoForm.css";

function TodoForm({ addItem }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addItem({ id: Math.floor(Math.random() * 10000000000000000), text: input });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Add your plan"
        value={input}
        name="plan"
        className="input-plan"
        onChange={handleChange}
      />
      <button className="add" onClick={handleAdd} disabled={input.length === 0}>
        ADD
      </button>
      <hr />
    </form>
  );
}

export default TodoForm;
