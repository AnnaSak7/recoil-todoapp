import React, { useCallback } from "react";
import "./InputTask.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { inputTitleState } from "../states/inputTitleState";

const InputTask = () => {
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);

  // OR
  //   const inputTitle = useRecoilValue(inputTitleState);
  //   const setInputTitle = useSetRecoilState(inputTitleState);

  const handleClick = () => {
    console.log(inputTitle);
  };

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
      console.log(inputTitle);
    },
    [inputTitle]
  );

  return (
    <div className="inputField">
      <input type="text" className="inputTitle" onChange={onChange} />
      <button type="button" className="addButton" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default InputTask;
