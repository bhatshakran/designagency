import React from 'react';
import Container from '../components/container';
import Member from '../components/member';

const About = () => {
  return (
    <Container>
      <div className='mt-20'>
        <div className='flex items-center flex-col text-center'>
          <div>
            <span className='text-5xl font-domaine md:text-7xl'>
              Get to know us
            </span>
            <p className='max-w-sm mt-6 md:max-w-xl'>
              We focus our efforts on creating solutions to discuss each one
              bringing you a step closer to the optimal version.
            </p>
          </div>
          <div className='flex mt-20 flex-wrap justify-center gap-y-20 gap-x-10'>
            <div>
              <Member size='large' location='/actors/downey.png' />
              <h4 className='font-bold'>Robert Downey Jr.</h4>
              <p className='text-sm'>CEO at Marvel</p>
            </div>
            <div>
              <Member size='large' location='/actors/hemsworth.png' />
              <h4 className='font-bold'>Chris Hemsworth</h4>
              <p className='text-sm'>CTO at Marvel</p>
            </div>
            <div>
              <Member size='large' location='/actors/bernthal.png' />
              <h4 className='font-bold'>John Bernthal</h4>
              <p className='text-sm'>CTO at Marvel</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
