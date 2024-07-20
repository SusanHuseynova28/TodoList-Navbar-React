import React, { useState } from 'react';
import TodoItem from '../TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const addTodo = () => {
    if (form.name.trim() && form.surname.trim() && form.email.trim()) {
      setTodos([...todos, { id: Date.now(), ...form }]);
      setForm({
        name: '',
        surname: '',
        email: ''
      });
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="border p-2 mb-2 block w-full"
        />
        <input
          type="text"
          name="surname"
          value={form.surname}
          onChange={handleInputChange}
          placeholder="Surname"
          className="border p-2 mb-2 block w-full"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="border p-2 mb-2 block w-full"
        />
        <button onClick={addTodo} className="bg-violet-500 text-white p-2 mt-2">Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
