import './App.css';
import Header from './components/header/header';
import HomePage from './home';

import {useState, useEffect} from 'react'
import useFetchData from './useFetchData';

function App() {

  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );

}

export default App;
