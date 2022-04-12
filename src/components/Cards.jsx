import React from 'react';
import Card from './Card';
import style from '../styles/Cards.module.css';

import SortableList from 'react-easy-sort';

import icon from '../img/rainy-icon.png';


export default function Cards({cities, onSortEnd, onClose}) {

 

  return (
    
    <React.Fragment>
      {cities.length < 1 &&
      <>
        <h5 className={style.titleEmpty}>Add your first city ...</h5>
        <img src={icon} alt="icon-weather"/>
      </>
      }
      {cities &&
      <SortableList
        className={style.container}
        onSortEnd={onSortEnd}
        draggedItemClassName="dragged"
      >
        {cities &&
          cities.map((city) => (
             
              <Card
                key={city.id}
                id={city.id}
                max={city.max}
                min={city.min}
                name={city.name}
                country={city.country}
                lon={city.lon}
                lat={city.lat}
                imgDescription={city.imgDescription}
                img={city.img}
                pressure={city.pressure}
                humidity={city.humidity}
                wind={city.wind}
                windDeg={city.windDeg}
                timezone={city.timezone}
                onClose={() => onClose(city.id)}
              />
   
          ))}
      </SortableList>
      }
    </React.Fragment>
  );
};

