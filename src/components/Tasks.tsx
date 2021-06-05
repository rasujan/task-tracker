import React from "react";
import { tasksType } from "../types";
import Task from "./Task";

interface tasksProps {
  tasks: Array<tasksType>;
  onToggle: Function;
  deleteTask: Function;
}

const Tasks = ({ tasks, onToggle, deleteTask }: tasksProps) => {
  return (
    <div className="flex flex-col w-full p-2 bg-gray-50 border border-gray-800 rounded-lg transition-all ">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onToggle={onToggle}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
