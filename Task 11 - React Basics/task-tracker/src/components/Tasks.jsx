import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task,index) => {
        return (
          <Task
            key={index}
            onDelete={onDelete}
            onToggle={onToggle}
            task={task}
          />
        );
      })}
    </>
  );
};

export default Tasks;
