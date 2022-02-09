import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTask} from "../actions/todoAction"

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const hundleSubmit = () => {
    if (text!=="")
    dispatch(addTask(text));
    setText("")
  };
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button variant="contained" onClick={hundleSubmit}>
        Contained
      </Button>
    </div>
  );
}

export default AddTask;
