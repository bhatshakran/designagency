import React from 'react';
import Container from './container';

const Contact = () => {
  return (
    <Container>
      <div className='mt-40'>
        <div className='flex flex-col md:flex-row items-center md:items-baseline gap-20 '>
          <div className='md:w-60  '>
            <h1 className='text-4xl font-domaine '>
              Lets work <span>together.</span>
            </h1>
            <p className='mt-6'>To create a better version of your project</p>
          </div>
          <div>
            <form className='flex flex-col items-center mx-0 gap-8'>
              <div className='w-96'>
                <input
                  type='text'
                  placeholder='Your name'
                  className=' border-b w-full border-black p-2'
                />
              </div>
              <div className='w-96'>
                <input
                  type='text'
                  placeholder='Email Phone'
                  className='border-b w-full border-black p-2'
                />
              </div>
              <div className=' w-96'>
                <textarea
                  py-2
                  name='msg'
                  id=''
                  //   cols={30}
                  rows={5}
                  className='w-full border border-black p-2 resize-none outline-none'
                  placeholder='Message'
                />
              </div>

              <div className='w-96'>
                <button className='btn'>Submit</button>
              </div>

              <div className='w-96'>
                <p>
                  By submitting this, you agree to our Terms and Conditions &
                  Privacy Policy
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
