import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import data  from './data'

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
        />
    )
})
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <div className='card-container'>
      {cards}
       
      </div>
    </div>
  );
}

export default App;
