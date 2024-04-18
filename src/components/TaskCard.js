import React from "react";

export const TaskCard = ({ task, deleteTask }) => {
  return (
    <li className={task.completed ? "completed" : "incomplete"}>
      <span>
        {task.id} - {task.name}
      </span>
      <button onClick={() => deleteTask(task.id)} className="delete">
        Delete
      </button>
    </li>
  );
};
