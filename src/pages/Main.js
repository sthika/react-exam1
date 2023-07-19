import React from 'react';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Main = ({ currency, setdata}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      let {data} = await axios(`https://www.cbr-xml-daily.ru/latest.js`);
      if (data) {
        setData(data);
        setdata(data)
      };
    };
    getData()
  }, [currency]);

  return (
    <main className='main'>
      <div className='container'>
       <div className="main__wrapper">
       <Card data={data} currency={currency} />
       </div>
      </div>
    </main>
  );
};

export default Main;
