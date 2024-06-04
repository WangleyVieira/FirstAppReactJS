import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  // const name = 'Wangley';
  // const newName = name.toUpperCase();
  // const url = 'https://via.placeholder.com/150'

  // function sum(a, b) {
  //   return a + b;
  // }
  return (
    <div className="App">

      <Frase/>

      <List/>

      <Pessoa
        nome="Wangley"
        idade="29"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
