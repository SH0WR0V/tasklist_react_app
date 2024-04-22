import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AddTask } from "./components/AddTask";
import { Tasklist } from "./components/Tasklist";
import { Counter } from "./components/Counter";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />
      <main>
        <Counter />
        <AddTask tasks={tasks} setTasks={setTasks} />
        <Tasklist tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
};
export default App;
