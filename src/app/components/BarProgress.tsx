import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

type Props = {};

const BarProgress = (props: Props) => {
  const step = useSelector((state: any) => state.step);

  useEffect(() => {
    console.log('step', step);
  }, [step]);

  const allSteps = [1, 2, 3, 4];

  return (
    <div className='bar-progress-bg'>
    <div className="bar-progress-container">
      {allSteps.map((num) => (
        <div key={num} className="step-container">
          <div
            className={`step-circle ${step === num ? 'active' : ''}`}
          >
            {num}
          </div>
          {/* {num !== allSteps.length && <div className={`step-line ${step >= num + 1 ? 'active' : ''}`}></div>} */}
        </div>
      ))}
    </div>
    </div>

  );
};

export default BarProgress;
