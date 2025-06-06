import React from 'react';
import CoffeeList from './components/CoffeeList.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router basename="/Simple-Coffee-Listing/">
      <div className="App">
        <CoffeeList></CoffeeList>
      </div>
    </Router>
  );
}

export default App;
