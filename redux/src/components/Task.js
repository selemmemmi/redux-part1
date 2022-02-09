import React from "react";
import Button from "@mui/material/Button";
function Task({ index, taskData }) {
  return (
    <div>
      <h4>{`${index + 1}/-${taskData}`}</h4>
      <Button variant="success">Done</Button>
      <Button variant="danger">Delete</Button>
      <Button variant="dark">Edit</Button>
    </div>
  );
}

export default Task;
