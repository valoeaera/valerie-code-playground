// React Imports
import React, { FormEvent, useState } from "react";

// Data
import boxes from "./box.json";
import "./Sudoku.css";

const Sudoku = () => {
  const [boxData, setBoxData] = useState(boxes.empty);
  const cellChangeHandler = (
    event: React.FormEvent<HTMLInputElement>,
    boxIndex: number,
    cellIndex: number
  ) => {
    setBoxData((prevState) => {
      const newVal = (event.target as HTMLInputElement).value;
      prevState[boxIndex][cellIndex] = newVal;
      console.log(prevState);
      return prevState;
    });
  };

  return (
    <div id="sudoku-grid">
      {boxData.map((box, boxIdx) => {
        const boxId = `box-${boxIdx + 1}`;
        return (
          <div key={boxId} id={boxId} className="box">
            {box.map((cell, cellIdx) => {
              const cellId = `${boxId}-cell-${cellIdx + 1}`;
              return (
                <input
                  key={cellId}
                  id={cellId}
                  className="cell"
                  value={cell}
                  onChange={(event) => {
                    event.preventDefault();
                    console.log(event.target.value, boxIdx, cellIdx);
                    if (event.target.value !== "") {
                      cellChangeHandler(event, boxIdx, cellIdx);
                    }
                  }}
                  type="text"
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Sudoku;
