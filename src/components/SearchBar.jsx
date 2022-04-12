import React from 'react';
import style from '../styles/SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  const [city, setCity] = React.useState("");


  function onKeyUp(e) {
    if (e.charCode === 13) {
      props.onSearch(city);
      setCity("");
    }
  }
  
  return (
      <div className={style.inputContainer}>
    
      <input className={style.input}
      type="text"
      placeholder='Search the weather in...'
      value={city}
      onKeyPress={onKeyUp}
      onChange={event => setCity(event.target.value)}
      />

     

      <button 

        className={style.inputButton} 
        onClick={ (e) => {
          e.preventDefault();
          props.onSearch(city);
          setCity(""); }}>

        <svg className={style.pin} viewBox="0 0 90 90">
				<path d="M 45 0 C 25.463 0 9.625 15.838 9.625 35.375 c 0 8.722 3.171 16.693 8.404 22.861 L 45 90 l 26.97 -31.765 c 5.233 -6.167 8.404 -14.139 8.404 -22.861 C 80.375 15.838 64.537 0 45 0 z M 45 48.705 c -8.035 0 -14.548 -6.513 -14.548 -14.548 c 0 -8.035 6.513 -14.548 14.548 -14.548 s 14.548 6.513 14.548 14.548 C 59.548 42.192 53.035 48.705 45 48.705 z"   />
		    </svg>


      
        
      </button>

      

    </div>
    
  )
};