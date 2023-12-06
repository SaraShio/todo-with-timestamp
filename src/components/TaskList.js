import React, { useState } from "react";
import Task from "./Task";
import Form from "./Form";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const newTaskWithCreation = {
      ...task,
      createdAt: new Date().toISOString(),
      completedAt: null,
    };
    setTasks((prevTasks) => [...prevTasks, newTaskWithCreation]);
  }

  function removeTask(taskToRemove) {
    setTasks(tasks.filter((task) => task.id !== taskToRemove.id));
  }

  function toggleCompleted(taskToToggle, isChecked) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskToToggle.id) {
          return {
            ...task,
            completed: isChecked,
            completedAt: isChecked ? new Date().toISOString() : null,
          };
        }
        return task;
      }),
    );
  }

  function updateTaskTitle(taskId, newTitle) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task,
      ),
    );
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            remove={removeTask}
            toggleCompleted={(task, isChecked) =>
              toggleCompleted(task, isChecked)
            }
            updateTaskTitle={updateTaskTitle}
          />
        ))}
      </ul>
      <Form addTask={addTask} />
    </div>
  );
}
