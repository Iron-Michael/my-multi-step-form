import React,{ReactNode} from 'react';

type Props = {
    children: ReactNode;
};

const BackgroundMain = ({ children }: Props) => {
  return (
    <div className='main-bg'>
        {children}
    </div>
  );
};

export default BackgroundMain;
