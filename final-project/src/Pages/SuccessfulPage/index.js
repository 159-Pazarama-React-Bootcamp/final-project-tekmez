import React from "react";
import { useNavigate } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import "./index.css";

function SuccessfulPage() {
  const navigate = useNavigate();
  return (
    <div className="success-top-container">
      <img src="/check-mark.png" alt="mark" />
      <h2>Form created successfully</h2>
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

export default SuccessfulPage;
