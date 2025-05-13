// App.js
import React from "react";
import { add, subtract } from "./math"; // importing named exports

function App() {
  return (
    <div>
      <h1>Math Functions</h1>
      <p>5 + 3 = {add(5, 3)}</p>
      <p>5 - 3 = {subtract(5, 3)}</p>
    </div>
  );
}

export default App;
