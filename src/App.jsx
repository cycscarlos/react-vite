import React from "react";
import Header from "../src/components/header/Header";
import Nav from "../src/components/nav/Nav";
import Experience from "../src/components/experience/Experience";
import About from "../src/components/about/About";
import Services from "../src/components/services/Services";
import Portfolio from "../src/components/portfolio/Portfolio";
import Testimonials from "../src/components/testimonials/Testimonials";
import Contact from "../src/components/contact/Contact";
import Footer from "../src/components/footer/Footer";

const App = () => {
  return (
    <>
      <React.StrictMode>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </React.StrictMode>
    </>
  );
};

export default App;
