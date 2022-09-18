import React from 'react';

interface Props {
  children: React.ReactNode;
  size?: string;
}

const GradBorder: React.FC<Props> = ({ children, size }) => {
  return (
    <div className={size === 'large' ? 'large grad_border' : 'grad_border'}>
      <div className='img_container'>{children}</div>
    </div>
  );
};

export default GradBorder;
