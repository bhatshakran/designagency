import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
import Container from './container';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const HomeNav = () => {
  const { theme, setTheme } = useTheme();

  return (
    // <div className='container flex justify-center'>
    <div className=' p-2 w-full h-auto  flex items-center justify-between '>
      <Container justify='justify-between'>
        <div>
          <Image
            src='/assets/jdlogo.svg'
            height='47'
            width='65.33'
            alt='logo'
          />
        </div>

        <div>
          <ul className='list-none flex'>
            <li className='mx-2'>Home</li>
            <li className='mx-2'>About</li>
            <li className='mx-2'>Careers</li>
            <li className='mx-2'>Contact</li>
            <li className='mx-2 flex items-center'>
              <button
                className=' focus:outline-none outline-none'
                onClick={() =>
                  theme === 'light' ? setTheme('dark') : setTheme('light')
                }
              >
                {theme === 'dark' ? (
                  <MdOutlineLightMode className=' scale-125' />
                ) : (
                  <MdDarkMode className=' scale-125' />
                )}
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default HomeNav;
