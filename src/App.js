import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Details from './pages/Details';


function App() {

  const [inpValue, setInpValue] = useState("AUD")

  const [currency,setCurrency] = useState("AUD")

  const [data, setData] = useState({})

const handleInput = (e) => {
  let a = e.target.value
  setInpValue(a.toUpperCase())
}
const handleKeyDown = (e) => {
    if (e.target.value !== '' && e.key === "Enter"){
      setCurrency(inpValue)
    }
  }

  return (
    <div className='App'>
      <Router> 
        <Header handleInput={handleInput} handleKeyDown={handleKeyDown}/>
        <Routes> 
            <Route path="/" element={<Main currency = {currency} setdata={setData}/>}/> 
            <Route path="/Details" element={<Details currency = {currency} data ={data}/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
