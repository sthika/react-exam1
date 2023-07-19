import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = ({handleInput, handleKeyDown}) => {

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <NavLink to='/' className='header__link'>
            Home
          </NavLink>
          <input type='text' placeholder='Выберите валюту' onInput={handleInput} onKeyDown={handleKeyDown}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
