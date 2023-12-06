import { useState } from "react";
import { nanoid } from "nanoid";
import { TextField, Button } from "@mui/material";

export default function Form(props) {
  const [task, setTask] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      title: task,
      completed: false,
      id: nanoid(),
    };
    props.addTask(newTask);
    setTask("");
    setShowOverlay(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      title: task,
      completed: false,
      id: nanoid(),
      createdAt: new Date().toISOString(),
    };
    props.addTask(newTask);
    setTask("");
    setShowOverlay(false);
  }

  return (
    <div className="addTask">
      {showOverlay ? (
        <div className="overlay">
          <form onSubmit={handleSubmit}>
            <TextField
              label="Add new task..."
              variant="outlined"
              fullWidth
              onChange={handleTaskChange}
              value={task}
            />
            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
            <Button
              onClick={() => setShowOverlay(false)}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setShowOverlay(true)}
          className="add-task-button"
        >
          Add Task
        </button>
      )}
    </div>
  );
}
