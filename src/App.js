import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import HeroImage from './components/HeroImage/HeroImage';
import Footer from './components/Footer/Footer';
import Skills from './components/Routes/Skills/Skills';
import Projects from './components/Routes/Projects/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navigation/>
          <Route path="/" exact component={HeroImage}/>
          <Route path="/skills" exact component={Skills}/>
          <Route path="/projects" exact component={Projects}/>
          <Footer/>
        </div>
    );
  }
}

export default App;
