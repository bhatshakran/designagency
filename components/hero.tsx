import React from 'react';
import Container from './container';

const Hero = () => {
  return (
    <Container>
      <div className='mt-40 py-2'>
        <div className='hero_txt relative font-domaine text-4xl sm:text-5xl md:text-6xl text-center '>
          <h2>We always look beyond</h2>
          <div className=' mt-2 md:mt-6'>
            <span> the design</span>
          </div>
        </div>
        <div className='flex justify-center mt-3 md:mt-8 font-inter '>
          <p className='text-center text-sm md:text-xl max-w-lg'>
            We focus our efforts on creating solutions to discuss each one
            bringing you a step closer to the optimal version.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
