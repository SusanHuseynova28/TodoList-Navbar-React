import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li className="flex justify-between items-center mb-2 p-2 border">
      <div>
        <p><strong>Name:</strong> {todo.name}</p>
        <p><strong>Surname:</strong> {todo.surname}</p>
        <p><strong>Email:</strong> {todo.email}</p>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white p-2">Delete</button>
    </li>
  );
};

export default TodoItem;
