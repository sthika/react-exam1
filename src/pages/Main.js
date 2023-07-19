import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Main = ({currency}) => {

    const [data, setData] = useState({})
    useEffect(() => {
      const getData = async () => {
        let {data} = await axios(`https://www.cbr-xml-daily.ru/latest.js`)
        setData(data)
      }
      getData()
    }, [currency])
  return (
    <main className="main">
        <div className="container">
            <Card data = {data} currency={currency}/>
        </div>
    </main>
  )
}

export default Main