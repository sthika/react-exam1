import React from 'react';
const rates = {
  AUD: 'https://static.theprint.in/wp-content/uploads/2023/02/ANI-20230202082727.jpg',
  AZN: 'https://files.fortrader.org/uploads/2011/07/azn50.jpg',
  GBP: 'https://s.yimg.com/ny/api/res/1.2/a1AT0fJ5GrtJcC_b82V3Tg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/fx_empire_176/4a2354ba9896a4ed9803422aa93d17b0',
  AMD: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/10000_dram_2018_Obverse.jpg',
  BYN: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  BGN: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  BRL: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  HUF: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  VND: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  HKD: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  GEL: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  DKK: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  AED: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  USD: 'https://cdn.corporatefinanceinstitute.com/assets/united-states-dollar-usd.jpeg',
  EUR: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  EGP: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  INR: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  IDR: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  KZT: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  CAD: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  QAR: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  KGS: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  CNY: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  MDL: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  NZD: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  NOK: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  PLN: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  RON: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  XDR: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  SGD: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  TJS: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  THB: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  TRY: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  TMT: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  UZS: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  UAH: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  CZK: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  SEK: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  CHF: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  RSD: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  ZAR: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  KRW: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
  JPY: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/500_Belarus_2009_front.jpg',
};

const Details = ({ currency }) => {

  return (
    <div className='details'>
      <div className='container'>
        <div className='details__wrapper'>
          <p className='details__header'>{currency}</p>
          <div className='details__img'>
            <img src={rates[`${currency}`]} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
