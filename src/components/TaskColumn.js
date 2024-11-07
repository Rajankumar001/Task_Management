import React from 'react';
import TaskCard from './TaskCard';
import './Taskcolumn.css';

function TaskColumn({ title }) {
  return (
    <div className="task-column">
      <h3>{title}</h3>
      <TaskCard title="Brainstorming" priority="Low" deadline="12/5/24" />
      <TaskCard title="Research" priority="High" deadline="12/5/24" />
      {/* Add more TaskCard components as needed */}
    </div>
  );
}

export default TaskColumn;
