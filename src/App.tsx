import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;