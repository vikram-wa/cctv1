import React, { useState } from "react";

function AdminLogin({
  setLoggedIn,
  navigate
}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {

    e.preventDefault();

    if (
      username === "admin" &&
      password === "1234"
    ) {

      setLoggedIn(true);

    } else {

      alert(
        "Invalid username or password!"
      );

    }
  };

  return (
    <div className="admin-login">

      <div className="login-box">

        <div className="admin-logo">
          🔐
        </div>

        <h1>JEPL Admin</h1>

        <p>
          Login to Admin Dashboard
        </p>

        <form onSubmit={login}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>

        </form>

        <button
          className="back-button"
          onClick={() => navigate("home")}
        >
          ← Back To Website
        </button>

        <small>
          Demo: admin / 1234
        </small>

      </div>

    </div>
  );
}

export default AdminLogin;