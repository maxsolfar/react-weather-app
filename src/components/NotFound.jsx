import React from 'react';
import style from '../styles/NotFound.module.css';

import icon from '../img/notfound.png';

function NotFound() {
  return (
    <>
      <h4 className={style.Title}>Error 404 - Page Not Found</h4>
      <img src={icon} alt="not-found-icon" />
      <p className={style.Text}>We're sorry, but the page you requested cannot be found.</p>
      
    </>
  )
}
export default NotFound;