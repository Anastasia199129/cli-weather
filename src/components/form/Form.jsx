import React from 'react';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import { toast } from 'react-toastify';

export default function Form({ onSubmitHandler }) {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.currentTarget.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitHandler(query);
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          onChange={onChange}
          value={query}
          placeholder="movie title"
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
}
