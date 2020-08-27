import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
      <Welcome name="Erin" />
      <Clock />
      <Contact />
      <h2>Welcome to React</h2>
    </div>
  );
}

export default App;
