//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
import { useState, useEffect } from "react";
//import { useEffect } from "react";
import axios from "axios";

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

  return (
    <div>
      <h1>Student Task Manager</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button>Add Task</button>

      {tasks.map((task) => (
        <h3 key={task.id}>{task.title}</h3>
      ))}
    </div>
  );
}

export default App;