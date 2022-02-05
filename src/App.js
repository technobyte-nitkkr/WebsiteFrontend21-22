import './App.css';
import Background from './components/Background/Background';
import Main from './components/main/Main';
import Nav from './components/navbar/Nav';
import {BrowserRouter as Router} from "react-router-dom"; 

function App() {
  return (
    <div className="main">
      <Router>
        <Background />
        <Nav />
        <Main />
      </Router>
    </div>
  );
}

export default App;
