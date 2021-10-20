import React from "react";
import Item from "../Items/Items";

const WeatherInMyCity = (props) => {
  return (
    <ul>
      <Item
        title={props.data.title}
        country={props.data.parent.title}
        weatherName={props.data.consolidated_weather[0].weather_state_name}
        temperature={props.data.consolidated_weather[0].the_temp}
        tempMin={props.data.consolidated_weather[0].min_temp}
        tempMax={props.data.consolidated_weather[0].max_temp}
        wind={props.data.consolidated_weather[0].wind_speed}
        humidity={props.data.consolidated_weather[0].humidity}
        coordinats={props.data.latt_long}
        air_pressure={props.data.consolidated_weather[0].air_pressure}
        weather_state_abbr={
          props.data.consolidated_weather[0].weather_state_abbr
        }
      />
    </ul>
  );
};

export default WeatherInMyCity;
