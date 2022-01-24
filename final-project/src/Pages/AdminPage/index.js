import {
  faSignInAlt,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./index.css";

function AdminPage() {
  const navigate = useNavigate();
  return (
    <div className="admin-top-container">
      <div className="admin-navbar">
        <div className="navbar-title">
          <FontAwesomeIcon icon={faUserAstronaut} className="nav-icon" />
          <h2 className="title">Kodluyoruz</h2>
        </div>
        <Button
          classNameBtn="logout-btn"
          icon={faSignInAlt}
          onClick={() => navigate("/")}
        />
      </div>
      <div className="user-form-list">
        <div className="list-navbar">
          <h2>Name</h2>
          <h2>Surname</h2>
          <h2>Age</h2>
          <h2>Date</h2>
          <h2>Status</h2>
        </div>
        <div className="list" />
        <div className="list" />
        <div className="list" />
        <div className="list" />
        <div className="list" />
      </div>
    </div>
  );
}

export default AdminPage;
