import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


export function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'WELCOME'}/>
    </div>
  );
}

