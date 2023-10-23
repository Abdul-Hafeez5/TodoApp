import React, { useState } from "react";

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleUpdate = () => {
    onEdit(todo.id, updatedTitle);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div className="edit-todo">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div className="todo-content">
          <h5>{todo.title}</h5>
          <div className="button-container">
            <button onClick={() => onDelete(todo.id)}>Delete</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
