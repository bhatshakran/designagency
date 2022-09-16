import Image from 'next/image';
import React from 'react';

const HomeNav = () => {
  return (
    <div className='container flex justify-center'>
      <div className=' p-2 w-full h-auto  flex items-center justify-between max-w-6xl'>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
