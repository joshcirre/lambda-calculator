import React from 'react';

const SpecialButton = props => {
  const changeTotal = () => {
    props.setTotal(props.special);
  };

  return (
    <>
      <button className="special Button" onClick={() => changeTotal()}>
        {props.special}
      </button>
    </>
  );
};

export default SpecialButton;
