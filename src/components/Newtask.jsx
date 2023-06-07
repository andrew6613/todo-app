import React from "react";

const Newtask = ({ newTask }) => {
  const [title, setTitle] = React.useState("");

  return (
    <div className="bg-zinc-800 w-2/3 mx-4 mt-10 h-auto rounded-md px-4 py-2">
      <input
        className="h-10 text-white bg-transparent w-full rounded-md border-none outline-none"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter new task"
        onKeyDown={(e) => e.key === "Enter" && newTask(title)}
      />
    </div>
  );
};

export default Newtask;
