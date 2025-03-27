"use client"
import React from 'react';

type Props = {}

const InputSpace = (props: Props) => {
  return (
    <div className='input-space-bg'>
      <div style={{ width: "90%" }}>
        <h1 className='header'>Personal Info</h1>
        <label className='description'>Please provide name, email address, and phone number</label>

       <div className="input-top-label">
        <div>
        <label htmlFor="input-name">Name</label>
        </div>
        <input type="text" id="input-name" placeholder="Enter your name" />
        </div>
      </div>
    </div>
  );
}

export default InputSpace;
