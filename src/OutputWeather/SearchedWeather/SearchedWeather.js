import React from "react";
import Item from "../Items/Items";

const SearchedWeather = (props) => (
  <div className="many">
    {props.data.map((item, index) => {
      return (
        <Item
          key={index}
          title={item.result.title}
          country={item.result.parent.title}
          weatherName={item.result.consolidated_weather[0].weather_state_name}
          temperature={item.result.consolidated_weather[0].the_temp}
          tempMin={item.result.consolidated_weather[0].min_temp}
          tempMax={item.result.consolidated_weather[0].max_temp}
          wind={item.result.consolidated_weather[0].wind_speed}
          humidity={item.result.consolidated_weather[0].humidity}
          coordinats={item.result.latt_long}
          air_pressure={item.result.consolidated_weather[0].air_pressure}
          weather_state_abbr={
            item.result.consolidated_weather[0].weather_state_abbr
          }
        />
      );
    })}
  </div>
);

export default SearchedWeather;
