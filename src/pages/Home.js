import { Box } from '@mui/material';
import React, { useState } from 'react';
import Exercises from '../components/Exercises';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
    const [bodyPart,setBodyPart]=useState('all')
    const [exercises,setExercises]=useState([])
    return (
      <Box>
        <HeroBanner />
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises
          setExercises={setExercises}
          exercises={exercises}
          bodyPart={bodyPart}
        />
      </Box>
    );
};

export default Home;