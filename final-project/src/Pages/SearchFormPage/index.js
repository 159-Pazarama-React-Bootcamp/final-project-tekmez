import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import "./index.css";

function SearchFormPage() {
  const navigate = useNavigate();
  return (
    <div className="search-container">
      <div className="input-search-container">
        <TextField
          type="text"
          name="search"
          placeholder="Search"
          className="searchPage-input"
        />
        <button type="button" className="search-btn">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </div>
      <Button
        icon={faHome}
        classNameBtn="home-btn"
        className="home-icon"
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
}

export default SearchFormPage;
