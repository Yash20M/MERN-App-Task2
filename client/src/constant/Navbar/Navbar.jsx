import React, { useState } from "react";
import "./navbar.css";
import { Squash as Hamburger } from "hamburger-react";
import logo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [opened] = "active";
  const [isOpen, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <nav>
        <NavLink to={"/"}>
          <div className="logo">
            <img src={logo} alt="" className="logo_img" />
          </div>
        </NavLink>

        <div className="menu">
          <ul className={clicked ? "navbar active " : "navbar "}>
            <li>
              <NavLink to="/" className={opened}>
                Business
              </NavLink>
            </li>
            <li>
              <NavLink to="/carrer" className={opened}>
                Carrer
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={opened}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/media" className={opened}>
                Media
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={opened}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={opened}>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={opened}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="mobile-menu" onClick={() => setClicked(!clicked)}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
