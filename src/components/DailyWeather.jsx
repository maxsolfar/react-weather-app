import React from 'react';
import style from '../styles/DailyWeather.module.css';

function DailyWeather(props) {

  const dayOfWeek = new Date(props.id * 1000);


  if(!props) {
    return (
        <h1> Cargando.... </h1>
    )}
  else{

  return (
    <div className={
      props.description === "Drizzle"
        ? style.cardDrizzle
        : props.description === "Clouds"
        ? style.cardClouds
        : props.description === "Clear"
        ? style.cardClear
        : props.description === "Rain"
        ? style.cardRain
        : props.description === "Snow"
        ? style.cardSnow
        : style.cardSmoke
    }>

      <h3 className={style.DayNumber}>
        {dayOfWeek.toLocaleDateString("en-us", {
          weekday: "long",
        })}
      </h3>

      <div className={style.ImgDay}>
        <h5>{props.description}</h5>
        <img
          className={style.cardImg}
          src={`https://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt="img"
        />
      </div>

      <div className={style.Temperature}>
        <p>Min: <b>{Math.round(props.min)} °C</b></p>
        <p>Max: <b>{Math.round(props.max)} °C</b></p>
      </div>
    </div>
  );
};}

export default DailyWeather;