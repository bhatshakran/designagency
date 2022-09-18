import { useTheme } from 'next-themes';
import React from 'react';

interface Props {
  children: React.ReactNode;
  size?: string;
}

const GradBorder: React.FC<Props> = ({ children, size }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`${
        size === 'large'
          ? `grad_border large  ${
              theme === 'dark' ? 'before:bg-black' : 'before:bg-white'
            }`
          : `grad_border  ${
              theme === 'dark' ? 'before:bg-black' : 'before:bg-white'
            }`
      }`}
    >
      <div className='img_container'>{children}</div>
    </div>
  );
};

export default GradBorder;
