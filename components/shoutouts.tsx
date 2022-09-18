import Image from 'next/image';
import React from 'react';
import Container from './container';
import GradBorder from './gradBorder';

const Shoutouts = () => {
  return (
    <Container>
      <div className='mt-32 '>
        <div className='flex gap-24'>
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
      </div>
    </Container>
  );
};

export default Shoutouts;
