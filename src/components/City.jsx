import React from "react";


import style from "../styles/City.module.css";

import pressure from "../img/pressure.png";
import wind from "../img/wind.png";
import voice from "../img/voice.png";


import { useParams } from "react-router-dom";

import DailyWeather from "./DailyWeather";




export default function City({apiKey}) {

  
  const {cityId} = useParams();

  const [city, setCity] = React.useState([]);
  const [days, setDays] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  function speech() {
    const utterance =
      new SpeechSynthesisUtterance(` Weather in ${city.name}. ${city.imgDescription}.
      Temperature:  Minimun:${city.min} degrees. 
      Maximun:${city.max}degrees.  Wind Speed: ${city.wind}Km/hour. Humidity:${city.humidity}%.`);
    utterance.lang = "en";
    speechSynthesis.speak(utterance);
  }

  

  React.useEffect(() => {

    function dailyWeather(lat, lon){
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`
      )
        .then((response) => response.json())
        .then((rJson) => {
          if (rJson.daily !== undefined){
            setDays(rJson.daily);
            setLoading(false);
          }
          
        })
  }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((rJson) => {
        if (rJson.main !== undefined) {
          const city = {
            min: Math.round(rJson.main.temp_min),
            max: Math.round(rJson.main.temp_max),
            img: rJson.weather[0].icon,
            id: rJson.id,
            wind: rJson.wind.speed,
            windDeg: rJson.wind.deg,
            name: rJson.name,
            imgDescription: rJson.weather[0].main,
            lat: rJson.coord.lat,
            lon: rJson.coord.lon,
            pressure: rJson.main.pressure,
            humidity: rJson.main.humidity,
            country: rJson.sys.country,
            timezone: rJson.timezone,
          };
          setCity(city);
          dailyWeather(city.lat, city.lon);
          
        }
      })

  },[cityId, apiKey]);

  return (
    <>
    {loading && <section className={style.loader}>
      <div></div>
      <div></div>
      <div></div>
    </section>}
    {!loading &&
    <div className={style.Container}>
      <div
        className={
          city.imgDescription === "Drizzle"
            ? style.cardDrizzle
            : city.imgDescription === "Clouds"
            ? style.cardClouds
            : city.imgDescription === "Clear"
            ? style.cardClear
            : city.imgDescription === "Rain"
            ? style.cardRain
            : city.imgDescription === "Snow"
            ? style.cardSnow
            : style.cardSmoke
        }
      >
        <div className={style.nameInfo}>
          {console.log(days)}

          <img
            onClick={speech}
            className={style.imgSpeech}
            src={voice}
            alt="speech weather"
          />

          <h4>
            Weather in {city.name} <span>{city.country}</span>
          </h4>
          <div>
            <span>{city.imgDescription}</span>
            <img
              className={style.cardImg}
              src={`https://openweathermap.org/img/wn/${city.img}@2x.png`}
              alt="img-weather"
            />
          </div>
        </div>

        <div className={style.infoWeather}>
          <div className={style.left}>
            <div className={style.Sweather}>
              <h5>Temperature</h5>
              <div className={style.weather}>
                <div>
                  <b>Min</b>
                  <p>{city.min} °C</p>
                </div>
                <hr />
                <div>
                  <b>Max</b>
                  <p>{city.max} °C</p>
                </div>
              </div>
            </div>
            <div className={style.wind}>
              <img src={wind} alt="pressure" />
              <div>
                <p>
                  <b>Wind Speed: </b>
                  {city.wind} Km/h
                </p>

                <p>
                  <b>Wind Deg: </b>
                  {city.windDeg}
                </p>
              </div>
            </div>
          </div>

          <div className={style.right}>
            <div className={style.coord}>
              <div>
                <b>Longitude:</b>
                <span>{city.lon}</span>
              </div>

              <div>
                <b>Latitude:</b>
                <span>{city.lat}</span>
              </div>
            </div>

            <div className={style.pressure}>
              <div>
                <b>Pressure</b>
                <p>{city.pressure} mb</p>
              </div>
              <img src={pressure} alt="pressure" />
              <div>
                <b>Humidity</b>
                <p>{city.humidity} %</p>
              </div>
            </div>

            <div className={style.timezone}>
              <b>Timezone: </b>
              <span>{city.timezone}</span>
            </div>
          </div>
        </div>
        
        <h3 className={style.SubTitle} >Forecast next 7 days</h3>

        <div className={style.ContainerDay}>
    
          {days &&
            days.map((day, i) => (
              i > 0 &&
              <DailyWeather
                key={day.dt}
                id={day.dt}
                max={day.temp.max}
                description={day.weather[0].main}
                img={day.weather[0].icon}
                min={day.temp.min}
              />
            ))}
        </div>

      </div>
    </div>
    }
    </>
  );
}
