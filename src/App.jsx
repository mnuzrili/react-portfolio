import React, { useEffect } from 'react';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Nuzz's Portfolio</title>
      </Helmet>
      <div>
        <Navbar />
        <Bot />
        <Hero />
        <About />
        <Skills />
        {/* <Hireme /> */}
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
