import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import Favourites from './Favourites';
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/cuisine/:type" element={<Cuisine/>} />
        <Route path="/searched/:search" element={<Searched/>} />
        <Route path="/recipe/:name" element={<Recipe/>} />
        <Route path="/favourites" element={<Favourites/>} />
      </Routes>
    </AnimatePresence>  
  );
}

export default Pages