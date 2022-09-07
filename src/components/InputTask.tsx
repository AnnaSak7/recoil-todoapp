import React from "react";
import "./InputTask.css";

const InputTask = () => {
  return (
    <div className="inputField">
      <input type="text" className="inputTitle" />
      <button type="button" className="addButton">
        Add
      </button>
    </div>
  );
};

export default InputTask;
