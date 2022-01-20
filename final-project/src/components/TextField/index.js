import React from "react";

function TextField(props) {
  const { type, name, value, placeholder, onChange, className } = props;
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
}

export default TextField;
