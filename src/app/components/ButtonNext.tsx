// src/components/Button.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { nextStep } from '../store';
const ButtonNext: React.FC = () => {

   const dispatch = useDispatch()


  const handleNext = ()=> {
    dispatch(nextStep());
  }

  return (
    <button className='next-button' onClick={()=>handleNext()}>
      Next</button>
  );
};

export default ButtonNext;
