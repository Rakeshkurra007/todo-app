import React from 'react';
import TaskItem from './TaskItem';  // Add this import

const TaskList = ({
  tasks,
  toggleComplete,
  deleteTask,
  filterStatus,
  filterPriority,
  setFilterStatus,
  setFilterPriority,
}) => {
  const filteredTasks = tasks.filter((task) => {
    const statusMatch =
      filterStatus === 'All' ||
      (filterStatus === 'Completed' && task.completed) ||
      (filterStatus === 'Pending' && !task.completed);
    const priorityMatch =
      filterPriority === 'All' || task.priority === filterPriority;

    return statusMatch && priorityMatch;
  });

  return (
    <div className="task-list">
      <div className="filters">
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
        <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
