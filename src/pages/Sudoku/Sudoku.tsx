// React Imports
import React, { useState } from "react";

// Components
import SudokuCell from "./SudokuCell";

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
      const newVal: string =
        (event.target as HTMLInputElement).value.at(-1) ?? "0";
      if (/^\d*$/.test(newVal)) {
        const newState = JSON.parse(JSON.stringify(prevState));
        newState[boxIndex][cellIndex] = newVal;
        return newState;
      }
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
                <SudokuCell
                  key={cellId}
                  id={cellId}
                  box={boxIdx}
                  cell={cellIdx}
                  cellChangeHandler={cellChangeHandler}
                  value={cell}
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
