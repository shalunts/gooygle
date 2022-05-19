import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: 'All' },
  { url: '/news', text: 'News' },
  { url: '/images', text: 'Images' },
  { url: '/videos', text: 'Videos' },
];

const Links = () => (
  <div className='flex sm:justify-around justify-between items-center mt-4'>
    {links.map(({ url, text }, index) => (
      <NavLink
        key={index}
        to={url}
        // className='m-3 mb-0  hover:text-blue-700 hover:border-b-2  dark:text-blue-300 focus:border-b-2 focus:border-blue-700 focus:text-blue-700 dark:focus:border-white dark:focus:text-blue-100 dark:focus:border-b-2 dark:hover:border-b-2'
        className={({ isActive }) =>
          isActive
            ? 'm-3 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2'
            : 'm-3 mb-0'
        }
      >
        {text}
      </NavLink>
    ))}
  </div>
);

export default Links;
