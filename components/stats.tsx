import React from 'react';

const Stats = () => {
  return (
    <div className='flex w-full justify-evenly text-center'>
      <div>
        <h3 className='grad_blue'>24k</h3>
        <p>Projects</p>{' '}
      </div>
      <div>
        <h3 className='grad_blue'>10k</h3>
        <p>Clients</p>{' '}
      </div>
      <div>
        <h3 className='grad_blue'>7</h3>
        <p>Countries</p>{' '}
      </div>
    </div>
  );
};

export default Stats;
