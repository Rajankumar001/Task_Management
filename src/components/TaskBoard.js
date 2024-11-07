import React from 'react';
import TaskColumn from './TaskColumn';
import './TaskBoard.css';

function TaskBoard() {
  return (
    <div className="task-board">
      <TaskColumn title="To Do" />
      <TaskColumn title="On Progress" />
      <TaskColumn title="Done" />
    </div>
  );
}

export default TaskBoard;
