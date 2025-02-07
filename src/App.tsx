import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './styles/App.css';

const App = () => {
  return (
    <div className="App bg-slate-200">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;