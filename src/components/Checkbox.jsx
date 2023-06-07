import React from "react";
import { BsCheck } from "react-icons/bs";

const Checkbox = ({ isCompleted }) => {
  return (
    <div>
      <div
        className={`border-2 rounded-lg flex items-center ${
          isCompleted ? "bg-pink-400" : ""
        } justify-center h-6 w-6 border-pink-400 mx-3 my-0`}
      >
        {isCompleted && <BsCheck />}
      </div>
    </div>
  );
};

export default Checkbox;
