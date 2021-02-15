import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Directive from './pages/directive';
import Gallery from './pages/gallery';
import Nav from './components/nav';
import Header from './components/header';
import Followus from './components/followus';
import Footer from './components/footer';
import Links from './components/links'
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <div className="app row">
        
        <section className="col-80">
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" exact />
          <Route component={Directive} path="/directive" exact />
          <Route component={Gallery} path="/gallery" exact />
          <Route component={Contact} path="/contact" exact />
        </section>
        <aside className="col-20"><Followus /><Links /></aside>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
