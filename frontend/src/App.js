import React from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <section className="w-100 full-height">
      <Header />
      <Content />
      <Footer />
    </section>
  );
}
export default App;
