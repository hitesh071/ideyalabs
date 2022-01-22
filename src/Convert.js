import React from 'react';
import CurrencyConverter from 'react-currency-conv';

const Convert = (props) => {
  return (
    <div>
      <CurrencyConverter from={'USD'} to={'CAD'} value={29} />
    </div>
  );
};
export default Convert;
