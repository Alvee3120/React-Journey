import { useState } from "react";
import "./App.css";
import "./index.css";
import Card from "./components/Card";

function App() {
  const [title, setTitle] = useState("");
  const [deadline, setDeadine] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && deadline) {
      const newTask = {
        id: Date.now(),
        title,
        deadline,
      };

      setTasks([...tasks, newTask]); 
      setTitle("");                 
      setDeadine("");               
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="h-screen  flex flex-col items-center justify-center">
      <div className="max-w-md w-full mt-5 bg-white p-6 rounded shadow">
        <div className="mb-10">
          <h4 className="font-bold text-2xl text-center">Welcome to Alvee's</h4>
          <h1 className="font-bold text-6xl text-center text-orange-500">
            TO DO LIST
          </h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label>Task Name</label>
            <br />
            <input
              className="w-full p-2 border border-gray-300 rounded-l"
              type="text"
              placeholder="Write your task here.."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <br />
            <label className="mt-6">Deadline</label>
            <br />
            <input
              className="w-full p-2 border border-gray-300 rounded-l"
              type="date"
              value={deadline}
              onChange={(e) => setDeadine(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white mt-4 p-3 rounded-r hover:bg-blue-700"
            >
              ADD
            </button>
          </form>
        </div>
      </div>

      {/* Task Cards */}
      <div className="max-w-md w-full mt-5 bg-white p-6 rounded shadow">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks added yet.</p>
        ) : (
          tasks.map((task) => (
            <Card
              key={task.id}
              id={task.id}
              title={task.title}
              deadline={task.deadline}
              onDelete={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
