import React from "react";
import "./TaskList.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import { deleteTask } from "../../features/tasks/tasksSlice";

const TaskList = ({ tasks }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks &&
        tasks.map((task) => {
          return (
            <li>
              <div className="content-wrapper">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => {}}
                />
                <div className="content">
                  <h3>{task.title}</h3>
                  <Link className="description" to="/">
                    {task.description}
                  </Link>
                </div>
              </div>
              <div className="button-wrapper">
                <Button
                  className="small"
                  onClick={() => {
                    navigate(`/task_form/${task.id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  className="small"
                  onClick={() => {
                    dispatch(deleteTask({ id: task.id }));
                  }}
                >
                  Delete
                </Button>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default TaskList;
