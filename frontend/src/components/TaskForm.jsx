function TaskForm({
  newTask,
  setNewTask,
  addTask
}) {
  return (
    <div>

      <input
        type="text"
        placeholder="Enter Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>

    </div>
  );
}

export default TaskForm;