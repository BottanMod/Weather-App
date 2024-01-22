// App.js
import React from 'react';
import WeatherContainer from './container/WeatherContainer';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div className="app-container">
      <h1>Weather Application</h1>
      <WeatherContainer />
    </div>
  );
};

export default App;
