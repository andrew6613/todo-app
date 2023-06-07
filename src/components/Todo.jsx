import React from "react";
import { BsTrash } from "react-icons/bs";
import Checkbox from "./Checkbox";

const Todo = ({ todo, completeTask, deleteTask, isCompleted }) => {
  return (
    <div className="bg-zinc-800 h-14 w-2/3 mx-4 mt-2 text-white rounded-md cursor-pointer flex justify-between items-center">
      <div
        className="flex justify-between text-center"
        onClick={() => completeTask(todo.id, todo.isCompleted)}
      >
        <Checkbox isCompleted={isCompleted} />
        <div
          className={`w-full text-center leading-5 text-xl ${
            isCompleted ? "line-through" : ""
          } `}
        >
          {todo.title}
        </div>
      </div>
      <button className="m-3" onClick={() => deleteTask(todo.id)}>
        <BsTrash className="hover:text-red-800" size={19} />
      </button>
    </div>
  );
};

export default Todo;
