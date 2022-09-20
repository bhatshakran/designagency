import React from 'react';
import Contact from './contact';
import Container from '../components/container';
import Member from '../components/member';

const About = () => {
  return (
    <>
      <div className='mt-20'>
        <Container justify='justify-center'>
          <div className='flex items-center flex-col text-center'>
            <div className='flex items-center flex-col'>
              <span className='text-4xl sm:text-5xl font-domaine md:text-7xl'>
                Get to know us
              </span>
              <p className='text-sm  sm:text-lg w-56 sm:max-w-lg sm:w-auto mt-6 md:max-w-xl'>
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
        </Container>

        <div className='principles text-white mt-20 py-16 px-8 sm:p-16 w-full  '>
          <Container col={true} mini={true}>
            <div className=''>
              <h2 className='font-domaine text-3xl sm:text-4xl '>
                Our principles
              </h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 mt-16 gap-16 sm:gap-8 '>
              <div className='flex flex-col justify-between  '>
                <h4 className='text-lg sm:text-2xl mb-4 sm:mb-8 font-domaine '>
                  Patterns are everywhere
                </h4>
                <p className='text-sm sm:text-md'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Delectus, aliquam.
                </p>
              </div>
              <div className='flex flex-col  justify-between'>
                <h4 className='text-lg sm:text-2xl mb-4 sm:mb-8 font-domaine'>
                  We offer solutions
                </h4>
                <p className='text-sm sm:text-md'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quasi, quae.
                </p>
              </div>
              <div className='flex flex-col  justify-between'>
                <h4 className='text-lg sm:text-2xl mb-4 sm:mb-8 font-domaine'>
                  With optimality in mind
                </h4>
                <p className='text-sm sm:text-md'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quasi, quae.
                </p>
              </div>
              <div className='flex flex-col  justify-between'>
                <h4 className='text-lg sm:text-2xl mb-4 sm:mb-8 font-domaine'>
                  We dont reinvent the wheel
                </h4>
                <p className='text-sm sm:text-md'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quasi, quae.
                </p>
              </div>
              <div className='flex flex-col  justify-between'>
                <h4 className='text-lg sm:text-2xl mb-4 sm:mb-8 font-domaine'>
                  We always look at the design
                </h4>
                <p className='text-sm sm:text-md'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quasi, quae.
                </p>
              </div>
              <div className='flex flex-col  justify-between'>
                <h4 className='text-lg sm:text-2xl mb-4 sm:mb-8 font-domaine'>
                  We ensure the basics
                </h4>
                <p className='text-sm sm:text-md'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quasi, quae.
                </p>
              </div>
            </div>
          </Container>
        </div>

        <Contact />
        {/* <Footer */}
      </div>
    </>
  );
};

export default About;
