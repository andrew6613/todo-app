import React from "react";
import Newtask from "./Newtask";
import Todo from "./Todo";

const data = [
  {
    id: 0,
    title: "Read book",
    isCompleted: false,
  },
  {
    id: 1,
    title: "Buy milk",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Programing",
    isCompleted: false,
  },
];

const Main = () => {
  const [todos, setTodos] = React.useState(data);

  const completeTask = (id) => {
    const copied = [...todos];
    const findItem = copied.find((task) => task.id === id);
    findItem.isCompleted = !findItem.isCompleted;
    setTodos(copied);
  };

  const deleteTask = (id) => {
    setTodos([...todos].filter((task) => task.id != id));
  };

  const newTask = (title) => {
    setTodos([
      {
        id: Date.now(), // todos.length + 1,
        title,
        isCompleted: false,
      },
      ...todos,
    ]);
  };

  return (
    <div>
      <div className="mx-auto w-auto h-screen bg-zinc-900 p-1">
        <div className="w-4/5 ml-auto">
          {todos.map((t) => (
            <Todo
              key={t.id}
              todo={t}
              completeTask={completeTask}
              deleteTask={deleteTask}
              isCompleted={t.isCompleted}
            />
          ))}
          <Newtask newTask={newTask} />
        </div>
      </div>
    </div>
  );
};

export default Main;
