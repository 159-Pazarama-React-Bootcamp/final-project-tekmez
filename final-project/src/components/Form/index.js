import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import validationSchema from "../Schema/ValidationSchema";
import TextField from "../TextField";
import { postUser } from "../../Redux/Services";
import "./index.css";

function Form() {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        tc: "",
        reason: "",
        address: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(postUser(values));
        console.log(values);
      }}
    >
      {({ handleSubmit, handleChange, values, errors, dirty }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleChange}
            className="test"
          />
          {errors.firstName ? errors.firstName : null}
          <TextField
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName ? errors.lastName : null}
          <TextField
            type="text"
            name="age"
            placeholder="Age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age ? errors.age : null}
          <TextField
            type="text"
            name="tc"
            placeholder="TC"
            value={values.tc}
            onChange={handleChange}
          />
          {errors.tc ? errors.tc : null}
          <TextField
            type="text"
            name="reason"
            placeholder="Reason"
            value={values.reason}
            onChange={handleChange}
          />
          {errors.reason ? errors.reason : null}
          <TextField
            type="text"
            name="address"
            placeholder="Address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address ? errors.address : null}
          <button type="submit" disabled={!dirty}>
            Register
          </button>
        </form>
      )}
    </Formik>
  );
}

export default Form;
