import { tasksType } from "../types";
import { FiTrash2 } from "react-icons/fi";
import classNames from "classnames";

interface taskProp {
  task: tasksType;
  onToggle: Function;
  deleteTask: Function;
}

const Task = ({ task, onToggle, deleteTask }: taskProp) => {
  return (
    <div
      className={classNames(
        "flex m-1 p-2 w-full  justify-between items-center cursor-pointer shadow-md",
        {
          "border-l-2 border-green-500": task.reminder === true,
        }
      )}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div>
        <h3> {task.text}</h3>
        <p>{task.date}</p>
      </div>
      <div className="w-9 h-9 border-black border-1 rounded-full shadow-md">
        <FiTrash2
          className="text-red-600 w-8 h-8"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
