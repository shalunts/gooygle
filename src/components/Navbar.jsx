import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import logo from '../assets/logo.png';

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <Link to='/'>
          <img src={logo} alt='logo img' className='w-44' />
          {/* <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
            Gooygle 🔎
          </p> */}
        </Link>
        <button
          type='button'
          onClick={() => setDarkTheme(!darkTheme)}
          className='bg-gray-700 text-white text-xl border rounded-full px-4 py-1 hover:shadow-lg dark:bg-white dark:bg-gray-50 dark:text-gray-900'
        >
          {darkTheme ? '💡 Light' : '🌙 Dark'}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
