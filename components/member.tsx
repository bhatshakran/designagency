import Image from 'next/image';
import React from 'react';
import GradBorder from './gradBorder';

type MembType = {
  location: string;
  size: string;
};

const Member = ({ location, size }: MembType) => {
  return (
    <div>
      <GradBorder size={size}>
        <Image src={location} width='145' height='193' alt='actor' />
      </GradBorder>
    </div>
  );
};

export default Member;
