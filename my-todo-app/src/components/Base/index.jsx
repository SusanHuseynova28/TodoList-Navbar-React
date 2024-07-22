import React from 'react';
import { Link } from 'react-router-dom';

const BaseCard = () => {
  return (
    <nav className="bg-violet-500 p-4 flex justify-end">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white text-xl">Home</Link>
        </li>
        <li>
          <Link to="/about" className=" text-xl text-white">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BaseCard;
