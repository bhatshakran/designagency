import React from 'react';
import Container from '../components/container';

const Contact = () => {
  return (
    <Container justify='justify-center'>
      <div className='mt-40 px-8 mb-12'>
        <div className='flex flex-col md:flex-row items-start md:items-baseline gap-20 '>
          <div className=' w-auto md:w-68'>
            <h1 className='text-4xl sm:text-5xl font-domaine '>
              Lets work <span>together.</span>
            </h1>
            <p className='mt-4 md:mt-6'>
              To create a better version of your project
            </p>
          </div>
          <div>
            <form
              action='/'
              className='flex flex-col items-start mx-0 gap-8 w-full'
            >
              <div className='w-full  md:w-96'>
                <input
                  type='text'
                  placeholder='Your name'
                  className=' border-b w-full border-black p-2 outline-none focus:border-purple-600 focus:border-b-2'
                />
              </div>
              <div className='w-full  md:w-96'>
                <input
                  type='text'
                  placeholder='Email Phone'
                  className='border-b w-full border-black p-2 outline-none focus:border-purple-600 focus:border-b-2'
                />
              </div>
              <div className='w-full   md:w-96'>
                <textarea
                  py-2
                  name='msg'
                  id=''
                  //   cols={30}
                  rows={5}
                  className='w-full border border-black p-2 resize-none outline-none focus:border-purple-600 focus:border-2'
                  placeholder='Message'
                />
              </div>

              <div className='w-full  md:w-96'>
                <button className='btn' type='submit'>
                  Submit
                </button>
              </div>

              <div className='w-full  md:w-96'>
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
