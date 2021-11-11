import React from 'react';
import { useParams, useHistory } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import Form from '../../components/form/Form';
import TenDaysWeather from '../../components/tenDaysWeather/TenDaysWeather';

export default function SideViews() {
  const { city } = useParams();
  const searchQuery = useSelector(state => state.сities);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(searchQuery);

  useEffect(() => {
    return dispatch(actions.chooseСity(city));
  }, []);

  const onSubmit = (query, setQuery) => {
    if (query.trim() === '') {
      alert('Fill in the search box!');
      return;
    }

    dispatch(actions.chooseСity(query));
    history.push(`/in/${query}`);
    setQuery('');
  };

  return (
    <div>
      <Form onSubmitHandler={onSubmit} />
      <TenDaysWeather city={searchQuery} />
    </div>
  );
}
