import React from "react";
import { useSelector } from "react-redux";
import "../styles.css";
import TodoApp from "../containers/TodoApp";
import Login from "../containers/Login";

export default function App() {
  const token = useSelector((state) => state.login.token);

  return (
    <div className="App">
      <div className="rest">
        <div className="test"></div>
      </div>
      {!token && <Login />}
      <TodoApp />
    </div>
  );
}
