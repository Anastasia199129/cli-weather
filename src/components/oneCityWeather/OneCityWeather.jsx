import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function OneCityWeather({ city }) {
  const [oneCity, setOneCity] = useState(null);
  console.log(city);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=24498744197ba68ecec24a2a3e331322&units=metric`,
      )
      .then(function (response) {
        if (response.status === 200) {
          setOneCity(response.data);
          console.log(response);
          return response;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [city]);
  return (
    <div>
      {oneCity && (
        <div>
          <h2>{oneCity.name}</h2>
          <span>{oneCity.weather[0].description}</span>
          <span>temp:</span>
          <span>{Math.round(oneCity.main.temp)}&deg; </span>
          <span>min temp:</span>
          <span>{Math.round(oneCity.main.temp_min)}&deg; </span>
          <span>max temp:</span>
          <span>{Math.round(oneCity.main.temp_max)}&deg; </span>
          <span>sunrise</span>
          <span>{oneCity.sys.sunrise}</span>
          <span>sunset</span>
          <span>{oneCity.sys.sunset}</span>
        </div>
      )}
    </div>
  );
}
