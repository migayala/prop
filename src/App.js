import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      name={"Doe, Jane"}
      age={"Age: 45"}
      hairColor={"Hair Color: Black"}
      />
      <PersonCard 
      name={"Smith, John"}
      age={"Age: 88"}
      hairColor={"Hair Color: Brown"}
      />
      <PersonCard 
      name={"Fillmore, Millard"}
      age={"Age: 50"}
      hairColor={"Hair Color: Brown"}
      />
      <PersonCard 
      name={"Smith, Maria"}
      age={"Age: 62"}
      hairColor={"Hair Color: Brown"}
      />
    </div>
    
  );
}

export default App;
