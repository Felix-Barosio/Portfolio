import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
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
      <Contact />
    </div>
  );
}

export default App;
