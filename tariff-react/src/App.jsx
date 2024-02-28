
import './App.css';
import Header from './components/Cards/header/Header.jsx';
import CardOne from './components/Cards/CardOne.jsx'; 
import CardTwo from './components/Cards/CardTwo.jsx'; 
import CardThree from './components/Cards/CardThree.jsx';
import CardFour from './components/Cards/CardFour.jsx';



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