import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Portfolio from './components/Portfolio/Portfolio';
// import Service from './components/Services/Service';
// import Testimonials from './components/Testimonials/Testimonials';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <About />
      <Experience />
      {/* <Service /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
