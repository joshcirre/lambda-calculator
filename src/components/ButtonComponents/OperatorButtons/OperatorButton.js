import React from 'react';

const OperatorButton = props => {
  const changeTotal = () => {
    props.setTotal(props.operators);
  };
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        className="operator Button"
        onClick={() => {
          changeTotal();
        }}
      >
        {props.operators}
      </button>
    </div>
  );
};

export default OperatorButton;
