import React from 'react';
import About from './components/About/About';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <About />
    </div>
  );
}

export default App;
