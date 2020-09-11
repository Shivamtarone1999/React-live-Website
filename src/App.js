import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import { Switch,Route, Redirect } from 'react-router-dom';
import Footer from './Footer';
import './App.css';

const App = ()=>{
  return (
    <>

    <Navbar />
    <br/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/service" component={Service} />
      <Route path="/contact" component={Contact} />
      <Redirect to='/'/>
    </Switch> 
    <Footer/>
    </>
  );
}

export default App ;