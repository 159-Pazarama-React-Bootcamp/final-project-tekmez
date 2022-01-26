import React, { useEffect } from "react";
import {
  faSignInAlt,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../Redux/Services";
import Button from "../../components/Button";
import "./index.css";

function AdminPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.user);
  console.log(users);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUser());
  }, []);
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
        {users.map((user) => (
          <div className="list">
            <p className="p">{user.firstName}</p>
            <p className="p">{user.lastName}</p>
            <p className="p">{user.age}</p>
            <p className="p">{user.date}</p>
            <p className="p">{user.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
