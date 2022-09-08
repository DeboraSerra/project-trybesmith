import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const Content = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
      </Routes>
    </main>
  )
}

export default Content;