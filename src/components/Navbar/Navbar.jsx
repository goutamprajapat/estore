import "./Navbar.scss";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaShare,
  FaSearch,
  FaRegUser,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
function Navbar() {
  const [NavClick, setClicked] = useState(true);
  return (
    <>
      <div className="Nav-Container">
        <img src="./Images/yso-store.png" className="logo" alt="logo.png" />
        <nav className={NavClick === false ? "Navbar active" : "Navbar"}>
          <ul onClick={() => setClicked((prevState) => !prevState)}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="Shoping">Shop</NavLink>
            </li>
            <li>
              <NavLink to="About">About</NavLink>
            </li>
            <li>
              <NavLink to="Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="icon-container">
          <div
            className="icon-div d-none"
            onClick={() => setClicked((prevState) => !prevState)}
          >
            {NavClick === true ? <FaBars /> : <FaTimes />}
          </div>
          <div className="icon-div">
            <FaShoppingCart />
          </div>
          <div className="icon-div">
            <FaSearch />
          </div>
          <div className="icon-div">
            <FaRegUser />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default Navbar;
