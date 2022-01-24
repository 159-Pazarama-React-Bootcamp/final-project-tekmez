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
        <button
          type="button"
          className="home-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          <FontAwesomeIcon icon={faHome} className="home-icon" />
        </button>
      </div>
      <div className="admin-panel">
        <button type="button" className="admin-btn">
          Admin
          <FontAwesomeIcon icon={faUserShield} className="admin-icon" />
        </button>
      </div>
    </div>
  );
}

export default Menu;
