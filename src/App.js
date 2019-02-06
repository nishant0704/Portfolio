import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import HeroImage from './components/HeroImage/HeroImage';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navigation/>
          <HeroImage/>
          <Footer/>
        </div>
    );
  }
}

export default App;
