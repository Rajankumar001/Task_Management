import React from 'react';
import './TaskCard.css';

function TaskCard({ title, priority, deadline }) {
  return (
    <div className="task-card">
      <span className={`priority ${priority.toLowerCase()}`}>{priority}</span>
      <h4>{title}</h4>
      <p>Deadline: {deadline}</p>
      <button className="task-menu-btn">⋮</button>
    </div>
  );
}

export default TaskCard;
