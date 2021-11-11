import React from 'react';
import axios from 'axios';
import s from './mainViews.module.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OneCityWeather from '../../components/oneCityWeather/OneCityWeather';
import * as actions from '../../redux/actions';

export default function MainViews() {
  const [citys, setCitys] = useState(null);
  const searchQuery = useSelector(state => state.сities);
  const dispatch = useDispatch();

  const onCityClick = evt => {
    const name = evt.target.name;
    switch (name) {
      case 'Minsk':
        dispatch(actions.chooseСity('Minsk'));
        break;
      case 'Moscow':
        dispatch(actions.chooseСity('Moscow'));
        break;
      case 'Bratislava':
        dispatch(actions.chooseСity('Bratislava'));
        break;
      default:
        return;
    }
  };
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&appid=24498744197ba68ecec24a2a3e331322&units=metric&cnt=3`,
      )
      .then(function (response) {
        if (response.status === 200) {
          setCitys(response.data);
          return response;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [searchQuery]);

  return (
    citys && (
      <div>
        <OneCityWeather city={searchQuery} />
        <h2>{citys.city.name}</h2>
        <ul>
          {citys.list.map(e => (
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

        <div>
          <button className={s.button} name="Minsk" type="submit" onClick={onCityClick}>
            Minsk
          </button>
          <button className={s.button} name="Moscow" type="submit" onClick={onCityClick}>
            Moscow
          </button>
          <button className={s.button} name="Bratislava" type="submit" onClick={onCityClick}>
            Bratislava
          </button>
        </div>
      </div>
    )
  );
}
