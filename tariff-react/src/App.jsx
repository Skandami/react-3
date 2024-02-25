import React from 'react';
import './App.css';
import Header from './Header.jsx';
import CardOne from './CardOne.jsx'; 
import CardTwo from './CardTwo.jsx'; 
import CardThree from './CardThree.jsx';
import CardFour from './CardFour.jsx';



function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <CardOne />
        <CardTwo />
        <CardThree/>
   <CardFour/>
      </div>
    </div>
  );
}

export default App;