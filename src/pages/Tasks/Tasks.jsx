import React, { useState } from "react";
import "./Tasks.css";
import TaskList from "../../containers/TaskList/TaskList";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllTasks } from "../../features/tasks/tasksSlice";
import TaskFilter from "../../containers/TaskFilter/TaskFilter";
import Button from "../../components/Button/Button";

const Tasks = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const tasks = useSelector(getAllTasks);

  const filteredTasks = selectedCategory
    ? tasks.filter((t) => t.isCompleted.toString() === selectedCategory)
    : tasks;
  return (
    <>
      <TaskFilter setSelectedCategory={setSelectedCategory} />
      <TaskList tasks={filteredTasks} />
      <div className="button-container">
        <Button className="medium" onClick={() => navigate("/task_form")}>
          Add New Task
        </Button>
      </div>
    </>
  );
};

export default Tasks;
