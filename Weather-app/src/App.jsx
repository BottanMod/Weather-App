// App.js
import React from 'react';
import WeatherContainer from './container/WeatherContainer';
import DetailContainer from './container/DetailContainer';
import './App.css'; 
import './components/WeatherCard.css';

const App = () => {
  return (
    <div className="container">
      
      <WeatherContainer />
      <DetailContainer />
    </div>
  );
};

export default App;
