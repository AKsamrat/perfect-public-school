import React from 'react';
import Bnner from './Bnner';
import DIrectorCorner from './DIrectorCorner';
import Servicess from './Servicess';
import PhotoGalery from './PhotoGalery';

const Homepage = () => {
  return (
    <div>
      <Bnner></Bnner>
      <DIrectorCorner></DIrectorCorner>
      <Servicess></Servicess>
      <PhotoGalery></PhotoGalery>
    </div>
  );
};

export default Homepage;
