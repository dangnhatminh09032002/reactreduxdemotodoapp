import React, { useState } from "react";

export default function Login({ login }) {
  const [passwork, setPasswork] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    login(email, passwork);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={passwork}
        onChange={(e) => setPasswork(e.target.value)}
        placeholder="password"
      />
      <button>Login</button>
    </form>
  );
}
