import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {/*<Logo />
        <ImaneLinkForm />
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
