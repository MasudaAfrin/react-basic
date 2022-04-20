import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import {Intro} from './components/Intro';
import ClassComponent from './components/ClassComponent';
import Jsx from './components/Jsx';
import FunProps from './components/FunProps';
import ClassProps from './components/ClassProps';
import ClassState from './components/ClassHook'
import ClassHook from './components/ClassHook';

function App() {
  return (
    <div className="App">
      {/* <Greet/>  */}
      {/* <Intro/>
      <ClassComponent/>
      <Jsx /> */}
      {/* <FunProps name='Tuba'/> */}
      {/* <ClassProps name='Tuba'/> */}
      <ClassHook/>
    </div>
  );
}

export default App;
