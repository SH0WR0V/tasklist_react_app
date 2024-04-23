// import React, { useState } from "react";
import React, { useState, useRef } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTasks }) => {
  //   const [change, setChange] = useState("");
  const taskRef = useRef("");
  const [progress, setProgress] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      //   name: change,
      name: taskRef.current.value,
      completed: Boolean(progress),
    };
    setTasks([...tasks, task]);
    // setChange("");
    taskRef.current.value = "";
    setProgress(false);
  };
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          //   name="taskname"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          //   onChange={(event) => setChange(event.target.value)}
          //   value={change}
          ref={taskRef}
        />
        <select
          onChange={(event) => setProgress(event.target.value)}
          value={progress}
        >
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};
