import React, { useState } from "react";
import "./styles.css";
import Carousol from "./component/Carousel";

export default function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setState(!state)}>Show carousel</button>
      {state && (
        <Carousol>
          <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        </Carousol>
      )}
    </div>
  );
}
