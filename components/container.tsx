import React from 'react';

interface Props {
  children: React.ReactNode;
  justify?: string;
  mini?: boolean;
  col?: boolean;
}

const Container: React.FC<Props> = ({
  children,
  justify,
  col,
  mini = 'false',
}) => {
  if (mini === true) {
    return (
      <div className='flex justify-center w-full'>
        <div
          className={`w-full max-w-6xl flex ${
            col && 'flex-col'
          }   ${justify}  overflow-hidden`}
        >
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div className='flex justify-center w-full'>
        <div
          className={`w-full max-w-6xl flex ${
            col && 'flex-col'
          }  items-center ${justify}  overflow-hidden`}
        >
          {children}
        </div>
      </div>
    );
  }
};

export default Container;
