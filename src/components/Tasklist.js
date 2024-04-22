import React from "react";
import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

export const Tasklist = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(true);

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <section className="App">
      <ul>
        <h1>Task List</h1>
        <button className="trigger" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
          ))}
      </ul>

      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet consectetur</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis id
          temporibus provident hic enim ipsum voluptatem, expedita rem
          repellendus reprehenderit.
        </p>
      </BoxCard>

      <BoxCard result="alert">
        <p className="title">Lorem ipsum dolor sit </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, hic enim ipsum voluptatem,
          expedita rem repellendus reprehenderit.
        </p>
      </BoxCard>

      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis id
          temporibus provident hic enim ipsum voluptatem.
        </p>
      </BoxCard>
    </section>
  );
};
