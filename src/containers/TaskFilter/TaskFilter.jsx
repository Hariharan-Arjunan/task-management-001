import React from "react";
import "./TaskFilter.css";

const TaskFilter = ({ setSelectedCategory }) => {
  return (
    <div className="filter">
      <select onChange={(event) => setSelectedCategory(event.target.value)}>
        <option value="">All Categories</option>
        <option value="true">Completed</option>
        <option value="false">UnCompleted</option>
      </select>
    </div>
  );
};

export default TaskFilter;
