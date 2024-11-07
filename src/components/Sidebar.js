import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="task-summary">
        <div className="task-count">
          <span className="icon">📅</span>
          <div>
            <h4>Expired Tasks</h4>
            <p>5</p>
          </div>
        </div>
        <div className="task-count">
          <span className="icon">🔥</span>
          <div>
            <h4>All Active Tasks</h4>
            <p>7</p>
          </div>
        </div>
        <div className="task-count">
          <span className="icon">✅</span>
          <div>
            <h4>Completed Tasks</h4>
            <p>2/7</p>
          </div>
        </div>
      </div>
      <button className="add-task-btn">+ Add Task</button>
    </div>
  );
}

export default Sidebar;
