import React from "react";
import Input from "./components/Input";

const App = () => {

  const handleInputChange = (event) => {
    console.log("Input value:", event.target.value);
  };

  return (
    <div style={styles.container}>
      <h1>React Props Example</h1>
      <Input placeholder="Type something..." onChange={handleInputChange} />
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
};

export default App;
