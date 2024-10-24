// src/App.js

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";

import Contact from "./components/Contact";
// import BtnUp from './components/BtnUp';
import ProductUsage from "./components/ProductUsage";
import About from "./components/about";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div >
      <Header />
      <Hero />
      <About  />
      <Features />
      <ProductUsage />
      <Contact />

    </div>
  );
};

export default App;
