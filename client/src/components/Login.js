import React from "react";

function Login() {
  return (
    <div
      className="login"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form style={{}}>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Kwangu App</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            style={{ marginTop: "5px", height: "30px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
            width: "400px",
          }}
        >
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            style={{ marginTop: "5px", height: "30px" }}
          />
        </div>

        <button
          style={{
            width: "100px",
            height: "40px",
            color: "black",
            fontWeight: "bold"
          }}
        >
          Login
        </button>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            Don't have an account?
          </p>
          <button
            style={{
              width: "100px",
              height: "50px",
              color: "black",
              fontWeight: "bold"
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
