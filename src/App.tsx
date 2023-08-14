import { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState(["A", "B", "C"]);

  const addCell = (index: number) => {
    setCells((prevCells) => [
      ...prevCells.slice(0, index),
      "",
      ...prevCells.slice(index, prevCells.length),
    ]);
  };

  const changeInput = (value: string, index: number) => {
    if (value.length > 1) {
      return;
    }
    setCells((prevCells) => [
      ...prevCells.slice(0, index),
      value,
      ...prevCells.slice(index + 1, prevCells.length),
    ]);
  };

  return (
    <>
      <div className="container">
        <div className="array-container">
          <span className="add-cell" onClick={() => addCell(0)}></span>
          {cells.map((cell, index) => (
            <>
              <div className="array-box" key={index}>
                <input
                  value={cell}
                  placeholder="_"
                  onChange={(e) => changeInput(e.target.value, index)}
                />
              </div>
              <span
                className="add-cell"
                onClick={() => addCell(index + 1)}
              ></span>
            </>
          ))}
        </div>
        <p className="string">You entered: {cells.join("")}</p>
      </div>
    </>
  );
}

export default App;
