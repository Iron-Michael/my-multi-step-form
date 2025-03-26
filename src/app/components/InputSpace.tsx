"use client"
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';

type Props = {}

const InputSpace = (props: Props) => {

const step = useSelector((state: any) => state.step);  

    useEffect(()=>{
        console.log("step",step);     
    },[step])

  return (
    <div className='input-space-bg'>
        
    </div>
  )
}

export default InputSpace