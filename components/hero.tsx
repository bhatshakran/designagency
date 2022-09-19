import React from 'react';
import Container from './container';
import Stats from './stats';

const Hero = () => {
  return (
    <Container justify='justify-center' col={true}>
      <div className='mt-40  pt-2 hero pb-12 w-full relative '>
        <div className='hero_txt  relative  font-domaine text-4xl sm:text-5xl md:text-6xl text-center w-fit mx-auto'>
          <h2>We always look beyond</h2>
          <div className=' mt-2 md:mt-6'>
            <span> the design</span>
          </div>
        </div>
        <div className='flex justify-center mt-3 md:mt-8 font-inter '>
          <p className='text-center text-sm max-w-sm md:text-xl md:max-w-lg'>
            We focus our efforts on creating solutions to discuss each one
            bringing you a step closer to the optimal version.
          </p>
        </div>

        {/* <div className='jd  absolute -left-32 -bottom-40 z-10'>
          <Image
            src='/assets/jdoutline.svg'
            height={300}
            width={400}
            alt='jdoutline'
          />
        </div> */}
      </div>

      <Stats />
    </Container>
  );
};

export default Hero;
