import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from '../../components/form/Form';
import TenDaysWeather from '../../components/tenDaysWeather/TenDaysWeather';
import { useParams } from 'react-router';

export default function SideViews() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [toggle, setToggle] = useState(false);
  const { city } = useParams();

  const onSubmit = query => {
    setToggle(true);
    if (query.trim() === '') {
      alert('Fill in the search box!');
      return;
    }
    setSearchQuery(query);
  };

  return (
    <div>
      {!toggle && <TenDaysWeather city={city} />}
      {toggle && <TenDaysWeather city={searchQuery} />}

      <Form onSubmitHandler={onSubmit} />
    </div>
  );
}
