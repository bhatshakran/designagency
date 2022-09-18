import Image from 'next/image';
import React from 'react';
import Container from './container';
import GradBorder from './gradBorder';

const Shoutouts = () => {
  return (
    <Container>
      <div className='mt-48'>
        <div className='flex flex-wrap gap-24 justify-center'>
          <div>
            <GradBorder>
              <Image
                src='/actors/hemsworth.png'
                width='111'
                height='145'
                alt='actor'
                className='z-10 '
              />
            </GradBorder>
          </div>
          <div>
            <GradBorder size={'large'}>
              <Image
                src='/actors/downey.png'
                width='145'
                height='193'
                alt='actor'
              />
            </GradBorder>
          </div>
          <div>
            <GradBorder>
              <Image
                src='/actors/bernthal.png'
                width='111'
                height='145'
                alt='actor'
              />
            </GradBorder>
          </div>
        </div>
        <div className='mt-16 w-full text-center'>
          <p className='sm:max-w-2xl md:max-w-4xl mx-auto font-domaine text-md max-w-sm text-xl sm:text-3xl'>
            “Write is super-useful as we can see the actual text in the actual
            design. We can even adjust text length to make it look good!”
          </p>

          <h5 className='mt-6 text-sm md:text-lg font-extrabold'>
            Robert Downery Jr.
          </h5>
          <h6 className='text-xs md:text-sm'> Founder at Marvel</h6>
        </div>
      </div>
    </Container>
  );
};

export default Shoutouts;
