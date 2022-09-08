import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Provider>
      <section className="w-100 full-height">
        <Header />
        <Content />
        <Footer />
      </section>
    </Provider>
  );
}
export default App;
