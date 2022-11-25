import React,{ useState } from 'react';
import { Box } from '@mui/material';
import { Search } from '@mui/icons-material';

import Excercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SeacrhExcercises';



const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Excercises/>
    </Box>
  )
}

export default Home