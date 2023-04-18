import "./App.css";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getTasks = async () => {
      setIsLoading(true);
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
      setIsLoading(false);
    };
    getTasks();
  }, []);

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);

    // const id=Math.floor(Math.random()*10000)+1
    // const newTask={id,...task}
    // setTasks([...tasks,newTask])
  };
  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };
  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  return (
    <Router>
      <div className="container">
        <div>Hello From React</div>
        <Header
          onAdd={() => {
            setShowAddTask(!showAddTask);
          }}
          showAddTask={showAddTask}
        />
      <Routes>
        <Route
          path="/"
          element= {
            <>
              {showAddTask && <AddTask onAddTask={addTask} />}
              {isLoading && <div>Loading...</div>}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Tasks To Show"
              )}
            </>

          }
        />
        <Route path="/about" element={<About/>} />
      </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
