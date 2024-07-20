import React from 'react';
import TodoList from '../../components/TodoList';

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 flex justify-center">Todo List</h1>
      <TodoList />
    </div>
  );
};

export default Home;
