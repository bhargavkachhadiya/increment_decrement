import * as React from "react";
import { Button } from "@mui/material";
import "./App.css";

function App() {
  const [number, setNumber] = React.useState(0);
  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      setNumber(0);
      alert("Below 0 value is not allowed.");
    }
  };
  return (
    <>
      <div className="div">
        <h1>Increment & Decrement Number</h1>
        <h1
          style={{
            margin: 20,
            padding: 20,
            border: 2,
            borderStyle: "solid",
            borderRadius: 10,
            borderColor: "#1976d2",
            color: "#1976d2",
          }}
        >
          {number}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button sx={{ m: 1 }} variant="contained" onClick={increment}>
            Increment
          </Button>
          <br />
          <Button sx={{ m: 1 }} variant="contained" onClick={decrement}>
            Decrement
          </Button>
        </div>
      </div>
      <p style={{ margin: 20 }}>
        <i> * Below 0 : it shows alert message </i>
      </p>
    </>
  );
}

export default App;
