import React from 'react';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Portfolio />
    </div>
  );
}

export default App;
