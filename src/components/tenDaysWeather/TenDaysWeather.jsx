import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import s from './tenDaysWeather.module.css';

export default function TenDaysWeather({ city }) {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    if (!city) {
      return;
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=24498744197ba68ecec24a2a3e331322&units=metric&cnt=10`,
      )
      .then(function (response) {
        if (response.status === 404) {
          return alert('Тo such city exists');
        }
        if (response.status === 200) {
          setCities(response.data);
          return response;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [city]);

  return cities ? (
    <div>
      <h2 className={s.title}>{cities.city.name}</h2>
      <ul className={s.list}>
        {cities.list.map(e => (
          <li className={s.item} key={e.dt}>
            <p>
              <span className={s.weatherDescr}>{e.weather[0].description}</span>
              <span className={s.temp}>{Math.round(e.main.temp)}&deg; </span>
            </p>
            <p>
              <span className={s.weatherDescr}>min temp:</span>
              <span className={s.temp}>{Math.round(e.main.temp_min)}&deg;</span>
            </p>
            <p>
              <span className={s.weatherDescr}>max temp:</span>
              <span className={s.temp}>{Math.round(e.main.temp_max)}&deg; </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>No results were found for your search!</div>
  );
}
