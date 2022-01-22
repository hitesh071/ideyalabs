import React, { useState, useEffect } from 'react';
import './style.css';

import converter from './converter';
export default function App() {
  const [currencyData, setCurrencyData] = useState({
    amount: '',
    from: '',
    to: '',
  });
  const [result, setResult] = useState('');
  const [resFlag, seResFlag] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e);
    const { name, value } = e.target;
    setCurrencyData((prevState) => ({ ...prevState, [name]: value }));
    setResult('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currencyData.amount) {
      let result;
      if (currencyData.from === 'US Dollar -USD') {
        if (currencyData.to === 'Indian Rupee-INR')
          result = currencyData.amount * 75;
        if (currencyData.to === 'Euro-EURO')
          result = currencyData.amount * 0.88;
        if (currencyData.to === 'US Dollar -USD') result = currencyData.amount;
      }
      if (currencyData.from === 'Indian Rupee-INR') {
        if (currencyData.to === 'Indian Rupee-INR')
          result = currencyData.amount;
        if (currencyData.to === 'Euro-EURO')
          result = currencyData.amount * 0.0118;
        if (currencyData.to === 'US Dollar -USD')
          result = currencyData.amount * 0.01343;
      }
      if (currencyData.from === 'Euro-EURO') {
        if (currencyData.to === 'Indian Rupee-INR')
          result = currencyData.amount * 84.44;
        if (currencyData.to === 'Euro-EURO') result = currencyData.amount;
        if (currencyData.to === 'US Dollar -USD')
          result = currencyData.amount * 1.134;
      }

      setResult(result);
      seResFlag(true);
    } else {
      seResFlag(false);
      seResFlag('');
    }
  };
  useEffect(() => {}, [result]);
  console.log(currencyData);
  return (
    <div>
      <form onClick={handleSubmit}>
        <div>
          <label>Amount : </label>
          <input
            placeholder="Enter amount"
            id="amount"
            name="amount"
            value={currencyData.amount}
            onChange={handleChange}
          ></input>
          <label>From : </label>
          <select id="from" name="from" onChange={(e) => handleChange(e)}>
            <option>US Dollar -USD</option>
            <option>Indian Rupee-INR</option>
            <option>Euro-EURO</option>
          </select>
          <label>To : </label>
          <select id="to" name="to" onChange={(e) => handleChange(e)}>
            <option>Indian Rupee-INR</option>
            <option>US Dollar -USD</option>

            <option>Euro-EURO</option>
          </select>
          {/* <Convert /> */}
        </div>
        <button> Submit</button>
      </form>
      {resFlag && result && (
        <div>
          {currencyData.amount} {currencyData.from} = {result} {currencyData.to}
        </div>
      )}
    </div>
  );
}
