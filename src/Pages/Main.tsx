import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
import { tasksType } from "../types";
const Fade = require("react-reveal/Fade");
function Main() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState<tasksType[]>([]);
  const [call, setCall] = useState(false);

  const fetchTask = async (id: number) => {
    const result = await axios
      .get(`http://localhost:5000/tasks/${id}`)
      .then((res) => {
        return res;
      })
      .catch((err) => console.error(err));
    return result;
  };

  useEffect(() => {
    const fetchTasks = async () => {
      await axios
        .get("http://localhost:5000/tasks")
        .then((res) => {
          setTasks(res.data);
        })
        .catch((err) => console.error(err));
    };
    fetchTasks();
  }, [call]);

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  //CURD Operations

  // Add Task
  const addTask = async (task: tasksType) => {
    console.log(task);
    await axios.post("http://localhost:5000/tasks/", task);
    setCall(!call);
  };

  // Delete Task
  const deleteTask = async (id: number) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setCall(!call);
  };

  // Update Reminder
  const toggleReminder = async (id: number) => {
    const toggleReminderofTask: any = await fetchTask(id);

    const updatedTask = {
      ...toggleReminderofTask.data,
      reminder: !toggleReminderofTask.data.reminder,
    };

    await axios.put(`http://localhost:5000/tasks/${id}`, updatedTask);
    setCall(!call);
  };

  return (
    <div className="container mx-auto">
      <div className="flex w-ful justify-center">
        <div className="block w-1/3">
          <Header
            title="Task Tracker"
            toggleAddTask={toggleAddTask}
            showAddTaskState={showAddTask}
          />
          {showAddTask && (
            <Fade>
              <AddTask onAdd={addTask} />
            </Fade>
          )}
          {tasks.length !== -1 ? (
            <Tasks
              tasks={tasks}
              onToggle={toggleReminder}
              deleteTask={deleteTask}
            />
          ) : (
            <h1> No Tasks Found. </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
