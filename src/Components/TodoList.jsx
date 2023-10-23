import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", id: Date.now() });

  const addTodo = () => {
    if (newTodo.title.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo({ title: "", id: Date.now() });
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, updatedTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: updatedTitle };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo.title}
          onChange={(e) =>
            setNewTodo({ title: e.target.value, id: newTodo.id })
          }
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="todos-container">
        {todos.length === 0 ? (
          <h3>No todos</h3>
        ) : (
          <div className="todos">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
