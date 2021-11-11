import React from 'react';
import { useState } from 'react';
import s from './form.module.css';

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
    <div className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onSubmit}>
        <button className={s.SearchFormButton} type="submit">
          Search
        </button>
        <input
          className={s.SearchFormInput}
          name="name"
          type="text"
          onChange={onChange}
          value={query}
          placeholder="City name"
        />
      </form>
    </div>
  );
}
