import React, { useState } from "react";
import "./Login.css";
import Button from "../Button/Button";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successfull");
      navigate("/");
    }
  };

  return (
    <>
      <div className="login_container">
        <div className="login_box">
          <div className="login_left">
            <img
              src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?b=1&s=170667a&w=0&k=20&c=wm6YUMs03Bup4_9XcQaX61L711qJxAUExEJp_PWO8gI="
              alt="Login Images"
            />
            <h2 style={{ color: "white", marginBottom: "20px" }}>
              Don't Have an Account
            </h2>

            <NavLink to="/register" color="white">
              Register
            </NavLink>
          </div>
          <div className="login_right">
            <form method="POST">
              <div className="form__group field">
                <input
                  type="text"
                  className="form__field"
                  placeholder="Enter Email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="name" className="form__label">
                  Email
                </label>
              </div>
              <div
                className="form__group field"
                style={{ marginBottom: "20px" }}
              >
                <input
                  type="password"
                  className="form__field"
                  placeholder="Enter Password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password" className="form__label">
                  Password
                </label>
              </div>
              <Button text="Login" handleClick={loginUser} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
