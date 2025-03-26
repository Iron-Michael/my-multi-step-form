// src/components/Button.tsx
import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { nextStep, prevStep, setStep } from "../store";  // Import the actions



const ButtonBack: React.FC = () => {
  const dispatch = useDispatch()


  const handleBack = ()=> {
    dispatch(prevStep());
  }

  return (
    <button className='back-button' onClick={()=>{handleBack()}} >
      Go back</button>
  );
};

export default ButtonBack;
