import React from 'react'
import './Items.css'

const Item = (props) => {
  let title = props.title
  let country = props.country
  let weatherName = props.weatherName.toLowerCase()
  let tempMin = Number(props.tempMin).toFixed(1)
  let temperature = Number(props.temperature).toFixed(1)
  let tempMax = Number(props.tempMax).toFixed(1)
  let wind = Number(props.wind).toFixed(2)
  let humidity = props.humidity
  let air_pressure = props.air_pressure.toFixed(0)
  let coordinats = props.coordinats
  let weather_state_abbr = props.weather_state_abbr

  let url = `https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`
  return (
    <div className="Item">
      <img src={url} alt="" />
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
  )
}

export default Item
