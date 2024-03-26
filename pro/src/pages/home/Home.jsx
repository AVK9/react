import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 class="text-3xl font-bold underline text-white">Home</h1>
      <NavLink to="/login" class="text-xl font-bold underline text-white">
        Login
      </NavLink>
      <p></p>
      <NavLink to="/register" class="text-xl font-bold underline text-white">
        Register
      </NavLink>
    </div>
  );
};

export default Home;
