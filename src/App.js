import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';

import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import About from './components/About.jsx';
import City from './components/City.jsx';
import NotFound from './components/NotFound.jsx';

import arrayMove from 'array-move';


/*Sweet Alert*/
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'





export default function App() {

  /*
  ? APINAME AND LOCALSTORAGE
  */
  const apiKey =  '4ae2636d8dfbdc3044bede63951a019b';
  const nameStorage = "weather-app";

  const MySwal = withReactContent(Swal)


  /*State Cities*/
  const [cities, setCities] = React.useState([]);

 

  /* const [days, setDays] = React.useState([]); */
  /*
  * Component Did Mount
  */ 

  React.useEffect(() => {
    const weatherLocalStorage = JSON.parse(localStorage.getItem(nameStorage));

    if(localStorage.getItem(nameStorage)){
      setCities([ ...weatherLocalStorage]);
    }
    
  },[]);

  

  /*
  ? On search / Search Bar
  */ 

  function onSearch(city) {
    if (cities.some((c) => c.name.toLowerCase() === city.toLowerCase())){
      MySwal.fire({
        title: 'the city already has been added',
        footer: 'Weather App - maxsolfar',
        width: 600,
        icon: 'info',
        iconColor: '#686BCC',
        padding: '1em',
        color: '#686BCC',
      });
    } 
    
    else {
      try{
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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
              localStorage.setItem(nameStorage, JSON.stringify([...cities, city]));
              setCities((oldCities) => [...oldCities, city]);
            }
            else {
              MySwal.fire({
                title: 'The city is not found',
                footer: 'Weather App - maxsolfar',
                width: 600,
                padding: '1em',
                icon: 'error',
                iconColor: '#686BCC',
                color: '#686BCC',
              });
            }
          }
      )}
      catch(e){
        console.log(e);
      } 
    }
  }

  /*
  * Drag and Drop
  */ 
  const onSortEnd = (oldIndex, newIndex) => {
    const orderCities = [...cities];
    setCities((oldCities) => arrayMove(oldCities, oldIndex, newIndex));
    localStorage.setItem(nameStorage, JSON.stringify(arrayMove(orderCities, oldIndex, newIndex)));
  };



  /*
  ! Delete Card
  */

  function onClose(id){
    setCities(oldCities => oldCities.filter(city=> city.id !== id));
    localStorage.setItem(nameStorage, JSON.stringify(cities.filter(city=> city.id !== id)));
  }



  /*
  ? On filter / City
  */ 
  /* function onFilter(cityId) {
    let city = cities.filter(c => c.id === parseInt(cityId));
    if(city.length > 0) {
        return city[0];
    } else {
        return null;
    }
  } */
  
  

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/"
          element={
              <Cards cities={cities} onSortEnd={onSortEnd} onClose={onClose} />
          }
        />

        <Route path="/city/:cityId" element={<City apiKey={apiKey} />} />

        <Route path="/about" element={<About />} />

        {/* Error 404*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );

}







