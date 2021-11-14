import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import s from './oneCityWeather.module.css';

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
          <div className={s.wrCountrytitle}>
            <h2 className={s.title}>{oneCity.name}</h2>
            <span className={s.country}>country:</span>
            <span className={s.countryName}>{oneCity.sys.country}</span>
          </div>
          <div className={s.wrDescription}>
            <span className={s.weatherDescr}>{oneCity.weather[0].description}</span>
            <span className={s.temp}>{Math.round(oneCity.main.temp)}&deg; </span>
            <span className={s.weatherDescr}>min temp:</span>
            <span className={s.temp}>{Math.round(oneCity.main.temp_min)}&deg; </span>
            <span className={s.weatherDescr}>max temp:</span>
            <span className={s.temp}>{Math.round(oneCity.main.temp_max)}&deg; </span>
          </div>
        </div>
      )}
    </div>
  );
}
