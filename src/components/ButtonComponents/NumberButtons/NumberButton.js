import React from 'react';

const NumberButton = props => {
  console.log(props);

  const changeTotal = () => {
    props.setTotal(props.numbers);
  };
  return (
    <>
      <button className="number Button" onClick={() => changeTotal()}>
        {props.numbers}
      </button>
    </>
  );
};

export default NumberButton;
