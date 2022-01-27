import React from "react";
import Button from "../Button";
import "./index.css";

function PersonInfo() {
  return (
    <div className="person-update">
      <Button text="Reject" classNameBtn="rejected-btn" />
      <Button text="Approve" classNameBtn="rejected-btn" />
      <textarea
        className="text-area"
        placeholder="You can enter the answer you want to write here."
      />
      <Button text="Update" classNameBtn="rejected-btn" />
    </div>
  );
}

export default PersonInfo;
