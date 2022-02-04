import './App.css';
import Animations from './components/animations/Animations';
import Main from './components/main/Main';
import Nav from './components/navbar/Nav';


function App() {
  return (
      <div className="main">
        <Animations/>
      <Nav/>
      <Main/>
    </div>
  );
}

export default App;
