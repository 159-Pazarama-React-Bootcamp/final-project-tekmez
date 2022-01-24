import React from "react";
import { useNavigate } from "react-router-dom";
import {
  faFileMedical,
  faSearch,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import "./index.css";

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="welcome-top-container">
      <div className="welcome-text-container">
        <h1 className="welcome-title">Welcome Application Form</h1>
        <p className="welcome-text">
          You can easily create your application form by using the application
          form I have prepared to use in your job applications.
        </p>
      </div>
      <div className="welcome-btn-container">
        <Button
          text="Create Form"
          icon={faFileMedical}
          classNameBtn="btn"
          className="medical"
          onClick={() => navigate("/CreateForm")}
        />
        <Button
          text="Find Form"
          icon={faSearch}
          classNameBtn="btn"
          className="search"
          onClick={() => navigate("/SearchFormPage")}
        />
        <Button
          text="Admin"
          icon={faUserShield}
          classNameBtn="btn"
          className="admin"
          onClick={() => navigate("/AdminPage")}
        />
      </div>
    </div>
  );
}

export default Welcome;
