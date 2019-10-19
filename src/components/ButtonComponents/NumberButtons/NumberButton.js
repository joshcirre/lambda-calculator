import React from 'react';

const NumberButton = ({ numbers }) => {
  console.log(numbers);
  return (
    <>
      <button>{numbers}</button>
    </>
  );
};

export default NumberButton;
