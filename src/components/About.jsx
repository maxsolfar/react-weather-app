import React from 'react';
import style from '../styles/About.module.css';

import weather from '../img/weather.jpg';


function About() {
  return (
    <React.Fragment>
      <section className={style.Container}>
        <div className={style.About}>
          <h2>About the App</h2>

          <img src={weather} alt="weather" />
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi
            ratione tempora minus ex qui recusandae accusantium. Reiciendis rem
            ex eveniet dolorum repellat aliquam, magni esse soluta, assumenda at
            ipsam! <br />
            <span>
              Minus ex qui recusandae accusantium. Reiciendis rem ex eveniet
              dolorum repellat aliquam, magni esse soluta, assumenda at ipsam!
            </span>
          </p>

          <br />
          <span><a href="www.maxsolfar.com"> Made by: MaxSolFar</a></span>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
