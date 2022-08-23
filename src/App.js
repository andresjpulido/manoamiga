import React from 'react'
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Directive from './pages/directive';
import Gallery from './pages/gallery';
import BarNav from './components/barnav';
import Header from './components/header';
import Followus from './components/followus';
import Footer from './components/footer';
import Links from './components/links';
import Album from './pages/album';
import Donations from './pages/donations'
import './App.css';

function App() {

  return (
    <HashRouter hashType="noslash">
        <Header />
        <BarNav />
        <div className="app row">        
        <section className="page">
          <Route component={Home} path="/home" exact />
          <Route component={About} path="/about" exact />
          <Route component={Directive} path="/directive" exact />
          <Route component={Gallery} path="/gallery" exact />
          <Route component={Contact} path="/contact" exact />
          <Route component={Album} path="/album/:idgallery/:idevent" exact />
          <Route component={Donations} path="/donations" exact />
          <Route component={Home} path="/" exact />
        </section>
        <aside className="aside"><Followus /><Links /></aside>
      </div>
        <Footer />
    </HashRouter>
  );
}

export default App;
