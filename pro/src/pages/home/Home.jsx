import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../components/Calendar/Calendar';
import Calendar from '../../components/Calendar/Calendar';


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
      <Calendar />
    </div>
  );
};

export default Home;
