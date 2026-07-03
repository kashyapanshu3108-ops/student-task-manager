const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const tasks = [
  {
    id: 1,
    title: "Learn React with fun",
    completed: false,
  },
  {
    id: 2,
    title: "Learn Backend also with fun",
    completed: true,
  },
];

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});