import Image from 'next/image';
import React from 'react';
import Container from './container';

const Techniques = () => {
  return (
    <Container>
      <div className='mt-60'>
        <div className='text-center flex flex-col items-center'>
          <h2 className='font-domaine text-2xl sm:text-3xl md:text-4xl'>
            Designs that lead in the space
          </h2>
          <div className='max-w-sm md:max-w-lg mt-4'>
            <p>
              With a combination of business strategy, design thinking and
              world-class execution techniques.
            </p>
          </div>
        </div>
        <div className='mt-28 flex flex-wrap justify-center text-xs text-center gap-x-8 gap-y-20'>
          <div className='feature_card'>
            <Image
              src='/assets/propositions.svg'
              height='40'
              width='60'
              alt='features'
            />
            <h3>Branding</h3>
            <p>Unique selling propositions & aesthetics that insight action</p>
          </div>
          <div className='feature_card'>
            <Image
              src='/assets/strategy.svg'
              height='40'
              width='60'
              alt='features'
            />
            <h3>Business Strategy</h3>
            <p>Proven strategic approaches executed with precision</p>
          </div>
          <div className='feature_card'>
            <Image
              src='/assets/recovert.svg'
              height='40'
              width='60'
              alt='features'
            />
            <h3>Research and Discovery</h3>
            <p>Uncover strategic customer and business insights</p>
          </div>
          <div className='feature_card'>
            <Image
              src='/assets/visual.svg'
              height='40'
              width='60'
              alt='features'
            />
            <h3>Visual UI & UX Design</h3>
            <p>Thoughtful interactions and interface design</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Techniques;
