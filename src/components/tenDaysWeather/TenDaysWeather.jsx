import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

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
      <h2>{cities.city.name}</h2>
      <ul>
        {cities.list.map(e => (
          <li key={e.dt}>
            <span>{e.weather[0].description}</span>
            <span>temp:</span>
            <span>{Math.round(e.main.temp)}&deg; </span>
            <span>min temp:</span>
            <span>{Math.round(e.main.temp_min)}&deg;</span>
            <span>max temp:</span>
            <span>{Math.round(e.main.temp_max)}&deg; </span>
            <span>sunrise</span>
            <span>{e.sys.sunrise}</span>
            <span>sunset</span>
            <span>{e.sys.sunset}</span>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>No results were found for your search!</div>
  );
}
