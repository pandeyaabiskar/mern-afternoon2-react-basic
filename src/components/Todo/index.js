import React, { useEffect, useState } from "react";
import "./todo.css";
import Input from "../Input";
// import Button from "../Button";
import List from "../List";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    setTodoList([...todoList, todoText]);
  };

  //Controlled
  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <div className="wrapper">
      {/* <Input inputValue={todoText} handleInputChange={handleInputChange} />
      <Button clickHandler={handleAddTodo}>Add</Button>
      {todoList.map((todo) => (
        <List item={todo} />
      ))} */}

      <TextField
        id="outlined-name"
        label="Todo"
        value={todoText}
        onChange={handleInputChange}
        fullWidth
        size="small"
      />

      <Button variant="contained" onClick={handleAddTodo} sx={{backgroundColor: "red"}}>Add</Button>

      {todoList.map((todo) => (
        <List item={todo} />
      ))}
    </div>
  );
}

export default Todo;
