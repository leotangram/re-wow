import React, { Component } from 'react';
import './App.css';
import MedicalRecordsContainer from './components/MedicalRecordsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Re Wow</h1>
        </header>
        <MedicalRecordsContainer />
      </div>
    );
  }
}

export default App;