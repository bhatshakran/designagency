import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className=' w-full flex justify-center  overflow-hidden'>
      {children}
    </div>
  );
};

export default Container;
