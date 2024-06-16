import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  editTask,
  getTaskById,
} from "../../features/tasks/tasksSlice";
import Button from "../../components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import "./TaskForm.css";

const TaskForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, description, dueDate } =
    useSelector((state) => getTaskById(state, id)) || {};
  const { register, handleSubmit, reset } = useForm({
    defaultValues: id ? { title, description, dueDate } : undefined,
  });

  const formSubmit = (data) => {
    if (id) {
      dispatch(editTask({ ...data, id }));
    } else {
      dispatch(addTask(data));
    }
    reset();
    navigate("/");
  };

  return (
    <>
      <h2>Task Form</h2>
      <form className="task-form" onSubmit={handleSubmit(formSubmit)}>
        <div className="form-field">
          <label>Title</label>
          <input {...register("title")} />
        </div>
        <div className="form-field">
          <label>Description</label>
          <textarea className="text-input" {...register("description")} />
        </div>
        <div className="form-field">
          <label>DueDate</label>
          <input className="date-input" type="date" {...register("dueDate")} />
        </div>
        <Button className="small" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default TaskForm;
