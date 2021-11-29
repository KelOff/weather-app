import React from 'react';
import './Items.css';

const Item = (props) => {
  const title = props.title;
  const country = props.country;
  const weatherName = props.weatherName.toLowerCase();
  const tempMin = Number(props.tempMin).toFixed(1);
  const temperature = Number(props.temperature).toFixed(1);
  const tempMax = Number(props.tempMax).toFixed(1);
  const wind = Number(props.wind).toFixed(2);
  const humidity = props.humidity;
  const air_pressure = props.air_pressure.toFixed(0);
  const coordinats = props.coordinats;
  const weather_state_abbr = props.weather_state_abbr;

  const url = `https://www.metaweather.com/static/img/weather/${ weather_state_abbr }.svg`;
  const cls = [ 'Item' ];
  if (temperature <= -10) {
    cls.push('freezing');
  } else if (temperature <= 30) {
    cls.push('warm');
  } else {
    cls.push('hot');
  }
  console.log(cls);
  return (
    <div className={ cls.join(' ') }>
      <img src={ url } alt="" />
      <li className="Item__list">
        <p>
          <b>
            <span className="Item__yellow">
              {title}, {country}
            </span>{' '}
            <i>{weatherName}</i>
          </b>
        </p>
        <p>
          <span className="Item__temperature">
            {temperature} <sup className="index">o</sup>C
          </span>{' '}
          temperature from {tempMin} to {tempMax} <sup className="index">o</sup>
          C, wind {wind} m/s. humidity {humidity}%, {air_pressure} hpa
        </p>
        <p>
          Geo cords <span className="Item__yellow">[{coordinats}]</span>
        </p>
      </li>
    </div>
  );
};

export default Item;
