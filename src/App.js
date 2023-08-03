import React from 'react'
import './App.css';
import NavBar from './component/NavBar';
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';
import {Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from './component/Footer';
const App = () => {
  return (
   <Box width='400px' sx={{width:{xl:'1488px'}}} m="auto">
   <NavBar />
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/exerciseDetails/:id' element={<ExerciseDetails />}/>
   </Routes>
   <Footer/>
   </Box>
  )
}

export default App