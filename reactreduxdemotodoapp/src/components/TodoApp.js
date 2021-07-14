import React, { useState, useEffect } from "react";

export default function TodoApp({ todos, addTodo, setTodos, fetchTodos }) {
  const [text, setText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      <input
        type={"text"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addTodo(text);
            setText("");
          }
        }}
      />
      <button
        onClick={() => {
          addTodo(text);
          setText("");
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
