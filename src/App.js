
import './App.css';
import Sidebar from './components/layout/sidebar/Sidebar';
import Main from './components/layout/main/Main';
import FunctionKey from './components/layout/functionkey/FunctionKey';



function App() {
  return (
    <div className="App">
      <FunctionKey/>
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
