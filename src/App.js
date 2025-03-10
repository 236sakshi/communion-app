
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './HomePage';
import EventListingPage from './EventListingPage';

const App=()=>{
  return (
    <>
        <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/events"  element={<EventListingPage/>}/>
    </Routes>
</>
 );
};

export default App;

    
       
 
