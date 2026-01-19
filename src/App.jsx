import { useState } from "react";
import "./App.css"; // assuming your CSS is in App.css

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (inputValue.trim() === "") return;
    setTasks([...tasks, inputValue]);
    setInputValue("");
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div id="root">
      <div className="task-container">
        <h1 className="task-title">TaskMaster</h1>

        {/* Input Section */}
        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter a task"
            className="task-input"
          />
          <button onClick={addTask} className="task-btn">
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span>{task}</span>
              <button
                onClick={() => deleteTask(index)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {/* Task Count */}
        <p className="task-count">
          You have {tasks.length} pending {tasks.length === 1 ? "task" : "tasks"}.
        </p>
      </div>
    </div>
  );
}

export default App;
