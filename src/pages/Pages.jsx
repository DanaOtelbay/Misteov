import React from 'react';
import Home from './Home';
import Top from './Top';
import Searched from './Searched';
import Detail from './Detail';
import Favourites from './Favourites';
import Genres from './Genres';
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/top/:type" element={<Top/>} />
        <Route path="/searched/:search" element={<Searched/>} />
        <Route path="/genres/:genre" element={<Genres/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/favourites" element={<Favourites/>} />
      </Routes>
    </AnimatePresence>  
  );
}

export default Pages