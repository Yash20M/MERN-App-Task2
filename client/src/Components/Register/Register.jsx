import React, { useState } from "react";
import Button from "../Button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import "./register.css";

const Input = ({ val, placeholder, type, name, value, onChange }) => {
  return (
    <>
      <div className="form__group field">
        <input
          type={type}
          className="form__field"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
        <label htmlFor="name" className="form__label">
          {val}
        </label>
      </div>
    </>
  );
};

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, confirmPassword } = user;

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        confirmPassword,
      }),
    });

    const data = await response.json();

    if (password !== confirmPassword) {
      alert("Password didnt match");
    } else if (response.status === 422 || !data) {
      alert("Invalid Registration");
    } else {
      alert("Registration Sucessfull.");
      navigate("/");
    }
  };

  return (
    <div className="register_container">
      <div className="register_box">
        <div className="register_left">
          <h2>Register</h2>
          <form method="POST">
            <Input
              type="text"
              val="Name"
              placeholder="Name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              val="Email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <Input
              type="number"
              val="Mobile Number"
              placeholder="Mobile Number"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
            <Input
              type="text"
              val="Your Profession"
              placeholder="Your Profession"
              name="work"
              value={user.profession}
              onChange={handleChange}
            />
            <Input
              type="password"
              val="Password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <Input
              type="password"
              val="Confirm Password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
            />
            <Button text="Register" handleClick={handleClick} disable />
          </form>
        </div>
        <div className="register_right">
          <img
            src="https://media.istockphoto.com/id/497347644/photo/hand-pressing-register-now.jpg?b=1&s=170667a&w=0&k=20&c=ZV58v5dckr5lEbp-D2ke7PxpkMiR-G6x_MvgBTm-2Hs="
            alt=""
          />
          <p>OR</p>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
