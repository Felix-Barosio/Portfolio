import React from 'react';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <About />
      <Experience />
    </div>
  );
}

export default App;
