import React from "react";
import { useSelector } from "react-redux";

import Task from "./Task";

function TaskList() {
  const Todos = useSelector((state) => state.TodoReducer.todos);

  return (
    <div>
      {Todos.map((taskData, index) => (
        <Task index={index} taskData={taskData.task} key ={index} />
      ))}
    </div>
  );
}

export default TaskList;
