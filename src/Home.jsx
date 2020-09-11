import React from 'react';

import web from '../src/images/img.svg';
import Common from './Common';

const Home = ()=>{
  return (
    <>
      <Common name="Grow your business with Aspire Technology" 
      imgsrc={web} visit="./service" 
      btnName="Get Started" />
    </>
  );
}

export default Home ;