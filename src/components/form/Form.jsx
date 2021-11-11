import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Form({ onSubmitHandler }) {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.currentTarget.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitHandler(query, setQuery);
    // setQuery('');
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
