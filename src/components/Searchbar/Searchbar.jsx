import { useState } from 'react';
import PropTypes from 'prop-types';
import s from '../Searchbar/Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const onHandleInput = e => {
    setValue(e.currentTarget.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={onHandleSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.button_search}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            name="search"
            value={value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onHandleInput}
          />
        </form>
      </header>
    );
  }


Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
  


