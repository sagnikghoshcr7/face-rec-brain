import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImaneLinkForm from './components/ImaneLinkForm/ImaneLinkForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImaneLinkForm />
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
