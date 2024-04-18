import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./App.css";

const App = () => {
  // let count = 0;
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [tasks, setTasks] = useState([
    { id: 4001, name: "practice react js", completed: true },
    { id: 4002, name: "take shower", completed: false },
    { id: 4003, name: "take lunch", completed: false },
  ]);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSub() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <Header />
      <h1 className="active">Hello, This is S. M. Shahriar</h1>
      <div className="App">
        <div className="box">
          <p>{count}</p>
          <button onClick={handleAdd} className="add">
            ADD
          </button>
          <button onClick={handleSub} className="sub">
            SUB
          </button>
          <button onClick={handleReset} className="reset">
            RESET
          </button>
        </div>
      </div>

      <div className="App">
        <h1>Task List</h1>

        <ul>
          <button className="trigger" onClick={() => setShow(!show)}>
            Toggle
          </button>
          {show &&
            tasks.map((task) => (
              <li
                key={task.id}
                className={task.completed ? "completed" : "incomplete"}
              >
                <span>
                  {task.id} - {task.name}
                </span>
                <button onClick={() => deleteTask(task.id)} className="delete">
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};
export default App;
