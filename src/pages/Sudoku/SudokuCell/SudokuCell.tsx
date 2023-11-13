// React Imports
import React from "react";

interface Props {
  id?: string;
  box: number;
  cell: number;
  cellChangeHandler: (
    event: React.FormEvent<HTMLInputElement>,
    boxIdx: number,
    cellIdx: number
  ) => void;
  value: string;
}

const SudokuCell = (props: Props) => {
  return (
    <input
      key={props.id}
      id={props.id}
      className="cell"
      value={props.value === "0" ? "" : props.value}
      onChange={(event) => {
        event.preventDefault();
        console.log(
          "cell value",
          event.target.value,
          "box number",
          props.box,
          "cell number",
          props.cell
        );
        props.cellChangeHandler(event, props.box, props.cell);
      }}
      type="text"
    />
  );
};

export default SudokuCell;
