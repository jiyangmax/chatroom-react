import React, { Component } from 'react';
import Chatbox from './chat/Chatbox';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
      <Chatbox />
    </div>
  };
}

export default App;
