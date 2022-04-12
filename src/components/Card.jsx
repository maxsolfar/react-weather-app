import React from 'react';
import style from '../styles/Card.module.css';

import temperature from '../img/temp2.png';

import {Link} from 'react-router-dom';

import { SortableItem } from 'react-easy-sort';

export default function Card(props) {
  
  return (
    
    <SortableItem key={props.id}>
      
      <div
        
        className={
          props.imgDescription === "Drizzle"
            ? style.cardDrizzle
            : props.imgDescription === "Clouds"
            ? style.cardClouds
            : props.imgDescription === "Clear"
            ? style.cardClear
            : props.imgDescription === "Rain"
            ? style.cardRain
            : props.imgDescription === "Snow"
            ? style.cardSnow
            : style.cardSmoke
        }
      >
        <div className={style.buttonContainer}>
          <Link to={`/city/${props.id}`}>
    
            <button className={style.info}>See Details</button>
          </Link>
          <button onClick={props.onClose} className={style.button}>
            X
          </button>
        </div>

        

        <div className={style.nameInfo}>
          <h4>
            {props.name} <span>{props.country}</span>
          </h4>
          <div>
            <span>{props.imgDescription}</span>
            <img
              className={style.cardImg}
              src={`https://openweathermap.org/img/wn/${props.img}@2x.png`}
              alt="img"
            />
          </div>
        </div>

        <div className={style.coord}>
          <div>
            <b>Longitude:</b>
            <span>{props.lon}</span>
          </div>

          <div>
            <b>Latitude:</b>
            <span>{props.lat}</span>
          </div>
        </div>

        <div className={style.Sweather}>
          <h5>Temperature</h5>
          <div className={style.weather}>
            
            <div>
              <b>Min</b>
              <p>{props.min} °C</p>
            </div>
            <img src={temperature} alt="temperat"/>
            <div>
              <b>Max</b>
              <p>{props.max} °C</p>
            </div>
          </div>
        </div>

  
      </div>
      </SortableItem>
  ); 
};






