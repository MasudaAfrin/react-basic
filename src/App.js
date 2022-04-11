import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import {Intro} from './components/Intro';
import ClassComponent from './components/ClassComponent';
import Jsx from './components/Jsx'

function App() {
  return (
    <div className="App">
      <Greet/> 
      <Intro/>
      <ClassComponent/>
      <Jsx />
    </div>
  );
}

export default App;
