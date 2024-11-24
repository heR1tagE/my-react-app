import React from "react";

const Input = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      style={styles.input}
    />
  );
};

const styles = {
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  },
};

export default Input;
