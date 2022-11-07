import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <div className='card-container'>
        <Card
          image='./card1.png'
          description='Life lessons with Katie Zaferes'
          price='136'
          rating='5.0'
          ratingNo='6'
        />
        <Card
          image='./card2.png'
          description='Learn wedding photography'
          price='125'
          rating='5.0'
          ratingNo='30'
        />
        <Card
          image='./card3.png'
          description='Group Mountain Biking'
          price='50'
          rating='4.8'
          ratingNo='2'
        />
       
      </div>
    </div>
  );
}

export default App;
