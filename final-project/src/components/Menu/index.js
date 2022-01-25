import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserShield,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import TextField from "../TextField";
import "./index.css";
import Button from "../Button";

function Menu() {
  const navigate = useNavigate();
  return (
    <div className="menu-top-container">
      <div className="search-form">
        <TextField
          type="text"
          name="search"
          placeholder="Search"
          className="search-input"
        />
        <button type="button" className="search-btn">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </div>
      <div className="home">
        <Button
          icon={faHome}
          classNameBtn="home-btn"
          className="home-icon"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="admin-panel">
        <Button
          text="Admin"
          icon={faUserShield}
          className="admin-icon"
          classNameBtn="admin-btn"
          onClick={() => navigate("/LoginPage")}
        />
      </div>
    </div>
  );
}

export default Menu;
