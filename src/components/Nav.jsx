import React from 'react';
import SearchBar from './SearchBar.jsx';

import style from '../styles/Nav.module.css';
import { Link } from 'react-router-dom';

import logo from '../img/logo.png'

const dateObject = new Date();

 


function Nav({onSearch}) {
  return (
    <div className={style.Navbar}>
      <Link to="/">
        <nav>
          <img src={logo} alt="logo" />
        </nav>
      </Link>

      <SearchBar onSearch={onSearch} />

      <div className={style.rightMenu}>
        <h3>
          {dateObject.toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h3>

        <Link to="/about">
          <button className={style.inputButton}>
            <svg className={style.aboutImg} viewBox="0 0 50 50">
              <path d="M 25 1 C 11.214844 1 0 10.960938 0 23.199219 C 0 29.113281 2.574219 34.644531 7.261719 38.835938 C 6.394531 41.394531 4.171875 43.15625 2.519531 44.464844 C 1.003906 45.664062 -0.09375 46.53125 0.234375 47.757812 L 0.339844 48.160156 L 0.699219 48.367188 C 1.609375 48.886719 2.820312 49.152344 4.308594 49.152344 C 9.257812 49.152344 16.371094 46.3125 19.503906 44.945312 C 21.285156 45.316406 23.054688 45.5 24.898438 45.5 C 38.6875 45.5 49.898438 35.539062 49.898438 23.300781 C 49.898438 11.003906 38.730469 1 25 1 Z M 26.601562 34 C 26.601562 34.199219 26.5 34.398438 26.199219 34.398438 L 23.902344 34.398438 L 23.902344 34.300781 C 23.699219 34.300781 23.5 34.199219 23.5 33.902344 L 23.5 20.5 C 23.5 20.300781 23.601562 20.101562 23.902344 20.101562 L 26.199219 20.101562 C 26.402344 20.101562 26.601562 20.199219 26.601562 20.5 Z M 26.601562 15.800781 C 26.601562 16 26.5 16.199219 26.199219 16.199219 L 23.800781 16.199219 C 23.601562 16.199219 23.402344 16.101562 23.402344 15.800781 L 23.402344 13.199219 C 23.402344 13 23.5 12.800781 23.800781 12.800781 L 26.199219 12.800781 C 26.402344 12.800781 26.601562 12.898438 26.601562 13.199219 Z M 26.601562 15.800781 " />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;