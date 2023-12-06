import TaskList from "./components/TaskList";
import "./styles.css";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Task Management App</Typography>
        </Toolbar>
      </AppBar>
      <TaskList />
    </div>
  );
}
