import React from 'react';
import Container from '../components/container';

const Careers = () => {
  return (
    <>
      <div className='mt-20 w-full'>
        <div className='principles relative  p-12 pb-28 '>
          <Container col={true}>
            <div className=' text-white flex items-center flex-col '>
              <h2 className='font-domaine text-4xl md:text-6xl'>
                Join our team
              </h2>
              <p className='md:max-w-xl mt-12 md:text-lg text-center'>
                We focus our efforts on creating solutions to discuss each one
                bringing you a step closer to the optimal version.
              </p>
            </div>
          </Container>

          <div className='absolute -bottom-3 left-1/2 -translate-x-1/2 '>
            <select
              name=''
              id=''
              className='outline-none w-60 border p-3 flex items-center flex-col overflow-visible'
            >
              <option
                value='Select a region'
                className='text-center self-center '
              >
                🌐 Select a region
              </option>
              <option value=''>India</option>
              <option value=''>US</option>
              <option value=''>UK</option>
              <option value=''>Germany</option>
              <option value=''>France</option>
              <option value=''>Italy</option>
            </select>
          </div>
        </div>
      </div>
      <Container justify='justify-center'>
        <div className='departments mt-32 w-2/3  '>
          <div>
            <h2 className='font-domaine text-4xl'>Departments</h2>
          </div>
          <div className='flex gap-x-20 gap-y-0 mt-20'>
            <div className='w-1/3'>
              <ul>
                <li>
                  <p>All Departments</p>
                </li>
                <li>
                  <p>Business Analytics</p>
                </li>
                <li>
                  <p>Design</p>
                </li>
                <li>
                  <p>Engineering</p>
                </li>
                <li>
                  <p>Finance</p>
                </li>
                <li>
                  <p>Intern</p>
                </li>
                <li>
                  <p>Legal</p>
                </li>
                <li>
                  <p>Marketing</p>
                </li>
                <li>
                  <p>Operations</p>
                </li>
                <li>
                  <p>Product</p>
                </li>
                <li>
                  <p>Trust</p>
                </li>
              </ul>
            </div>
            <div className='w-2/3 '>
              <div className=''>
                <ul>
                  <li>
                    <p>All Departments</p>
                  </li>
                  <li>
                    <p>Business Analytics</p>
                  </li>
                  <li>
                    <p>Design</p>
                  </li>
                  <li>
                    <p>Engineering</p>
                  </li>
                  <li>
                    <p>Finance</p>
                  </li>
                  <li>
                    <p>Intern</p>
                  </li>
                  <li>
                    <p>Legal</p>
                  </li>
                  <li>
                    <p>Marketing</p>
                  </li>
                  <li>
                    <p>Operations</p>
                  </li>
                  <li>
                    <p>Product</p>
                  </li>
                  <li>
                    <p>Trust</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Careers;
