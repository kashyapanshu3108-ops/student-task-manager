//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
// import { useState, useEffect } from "react";
//import { useEffect } from "react";
// import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  function addTask() {

  if(newTask.trim()===""){
    return;
  }

  const task = {

    id: Date.now(),

    title: newTask,

    completed:false

  };

  setTasks([...tasks, task]);

  setNewTask("");

}
function deleteTask(id) {
  const updatedTasks = tasks.filter((task) => task.id !== id);

  setTasks(updatedTasks);
}

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

function addTask() {

  if (newTask.trim() === "") {
    alert("Please enter a task");
    return;
  }

  const task = {
    id: Date.now(),
    title: newTask,
    completed: false,
  };

  setTasks([...tasks, task]);

  setNewTask("");

}

  return (
   <div>

  <h1>Student Task Manager</h1>

  <TaskForm

    newTask={newTask}

    setNewTask={setNewTask}

    addTask={addTask}

  />

  <TaskList

    tasks={tasks}

    deleteTask={deleteTask}

  />

</div>
  );
  {tasks.map((task) => (
  <div key={task.id}>
    <h3>{task.title}</h3>

    <button onClick={() => deleteTask(task.id)}>
      Delete
    </button>
  </div>
))}
}

export default App;