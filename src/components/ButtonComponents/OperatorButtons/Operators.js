import React, { useState } from 'react';
import OperatorButton from './OperatorButton';
import { operators } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state
  console.log(props);
  const [operatorState, setOperatorState] = useState(operators);
  console.log(operatorState);
  return (
    <div className="operatorButtons">
      {operatorState.map((item, index) => {
        console.log(item);
        return (
          <OperatorButton
            setTotal={props.setTotal}
            key={index}
            operators={item.char}
          />
        );
      })}
    </div>
  );
};

export default Operators;
