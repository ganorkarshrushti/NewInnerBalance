import React from 'react';
import CalmingVideosSlider from './CalmingVideosSlider';
import MeditationResources from './MeditationResources';
import SleepStories from './SleepStories';

const Relax = () => {
  return (
    <div className="relax-page" >
       <CalmingVideosSlider /> 
      <MeditationResources />
      <SleepStories /> 
    </div>
  );
};

export default Relax;
