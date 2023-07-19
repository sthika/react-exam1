import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ data, currency }) => {
  if (Object.keys(data).length) {

    return (
      <div className='card'>
        <p>Date: {data.date}</p>
        <p>Base: {data.base}</p>
        <p>
          {currency}: {data.rates[`${currency}`]}
        </p>
        <NavLink to='/Details' className='header__link'>
          <button>See all</button>
        </NavLink>
      </div>
    );
  }
};

export default Card;
