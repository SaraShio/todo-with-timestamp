import { useState } from "react";
import { Checkbox, Button, Typography, TextField } from "@mui/material";

export default function Task(props) {
  const task = props.task;

  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(task.title);

  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange(event) {
    props.toggleCompleted(task, event.target.checked);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    props.updateTaskTitle(task.id, editedValue);
    setIsEditing(false);
  }

  function handleValueChange(e) {
    setEditedValue(e.target.value);
  }

  return (
    <li className="list">
      <div className="task-list">
        <div className="task-left">
          <Checkbox checked={task.completed} onChange={handleStatusChange} />
          {isEditing ? (
            <TextField
              value={editedValue}
              onChange={handleValueChange}
              variant="outlined"
              fullWidth
            />
          ) : (
            <Typography variant="body1">
              {task.completed ? <del>{editedValue}</del> : editedValue}
            </Typography>
          )}
        </div>
        <div className="task-right">
          {isEditing ? (
            <button onClick={handleSave} className="save-button">
              Save
            </button>
          ) : (
            <button onClick={handleEdit} className="edit-button">
              Edit
            </button>
          )}
          <button onClick={handleDelete} className="remove-button">
            Remove
          </button>
          <div className="task-timestamps">
            <small>
              Created at: {new Date(task.createdAt).toLocaleString()}
            </small>
            {task.completed ? (
              <small>
                Completed at: {new Date(task.completedAt).toLocaleString()}
              </small>
            ) : null}
          </div>
        </div>
      </div>
    </li>
  );
}
