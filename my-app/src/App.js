import './App.css';
import ButtonComp from './components/ButtonComp';
import ChiamataTest from './components/ChiamataTest';
import ImgComp from './components/ImgComp';
import UtentiVideo from './components/UtentiVideo';


const users = [
  {id: 1, name: 'John', lastName: 'Smith', city: 'San Francisco'}, 
  {id: 2, name: 'Mario', lastName: 'Rossi', city: 'Roma'},
  {id: 3, name: 'Jane', lastName: 'verdi', city: 'London'}
]
function App() {
  return (
    <div className="App">
     <h1>My first React app</h1>
     <ButtonComp title="Bottone"/>
     <ImgComp img="https://picsum.photos/200" alt="immagine"/>
     <UtentiVideo title="Utenti" list={users}/>
    
     <hr/>
     <ChiamataTest/>


    </div>
  );
}

export default App;
