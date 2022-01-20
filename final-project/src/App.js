import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, postUser } from "./Redux/Services";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.user);
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    age: null,
    tc: null,
    reason: "",
    address: "",
  });
  const handleChange = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postUser(info));
  };
  // TESTİNG FORM FOR REDUX FEATURES
  return (
    <div className="App">
      <form>
        <div>
          <input
            type="text"
            name="firstName"
            value={info.firstName}
            onChange={handleChange}
            placeholder="fname"
          />
          <input
            type="text"
            name="lastName"
            value={info.lastName}
            onChange={handleChange}
            placeholder="lname"
          />
          <input
            type="number"
            name="age"
            value={info.age}
            onChange={handleChange}
            placeholder="age"
          />
          <input
            type="number"
            name="tc"
            value={info.tc}
            onChange={handleChange}
            placeholder="tc"
          />
          <input
            type="text"
            name="reason"
            value={info.reason}
            onChange={handleChange}
            placeholder="reas"
          />
          <input
            type="text"
            name="address"
            value={info.address}
            onChange={handleChange}
            placeholder="adres"
          />
          <button onClick={handleSubmit}>Add</button>
        </div>
      </form>
      <div>
        <button
          onClick={() => {
            dispatch(getUser());
          }}
        >
          Get User
        </button>
        {users.map((user) => (
          <h1>
            {user.id} {user.firstName} {user.lastName} {user.age} {user.tc}{" "}
            {user.reason} {user.address}{" "}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default App;
