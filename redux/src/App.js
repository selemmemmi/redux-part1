import "./App.css";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <AddTask/>
      <Task/>
      <TaskList/>
    </div>
  );
}

export default App;
