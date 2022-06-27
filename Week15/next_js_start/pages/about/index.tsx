import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div>
      About!!
      <Link href='/'>Go To Home</Link>
      <Box />
    </div>
  );
};

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export default About;
