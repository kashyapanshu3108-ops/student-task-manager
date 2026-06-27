//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
import { useState, useEffect } from "react";
//import { useEffect } from "react";
import axios from "axios";

function App() {

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
  const [tasks, setTasks] = useState([]);

  return (
  <div>
  <h1>Student Task Manager</h1>
  {
    tasks.map((task) => (
      <h3 key={task.id}>
        {task.title}
      </h3>
    ))
  }
</div>
  );
}

export default App;