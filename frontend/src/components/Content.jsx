import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PLP from '../pages/PLP';

function Content() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={ <PLP /> } />
      </Routes>
    </main>
  );
}

export default Content;
