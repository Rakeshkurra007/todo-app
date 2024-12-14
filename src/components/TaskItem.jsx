import React, { useState } from 'react';

function TaskItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);
  const [editedPriority, setEditedPriority] = useState(task.priority);

  const handleEditSubmit = () => {
    const updatedTask = {
      ...task,
      title: editedTitle,
      description: editedDescription,
      dueDate: editedDueDate,
      priority: editedPriority,
    };
    editTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {!isEditing ? (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          {task.dueDate && <small>Due: {task.dueDate}</small>}
          <div>
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? 'Mark Pending' : 'Mark Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </>
      ) : (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <input
            type="date"
            value={editedDueDate}
            onChange={(e) => setEditedDueDate(e.target.value)}
          />
          <select
            value={editedPriority}
            onChange={(e) => setEditedPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={handleEditSubmit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
