import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    //e.preventDefault() --> prevents browser refresh
    e.preventDefault();
    if (todo.task.trim()) {
      // .trim() --> checks if to-do is not empty and removes white spaces
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>MY TO-DO LIST</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add To-Do"
          name="task"
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default TodoForm;
