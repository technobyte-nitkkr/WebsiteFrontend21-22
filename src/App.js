import './App.css';
import Background from './components/Background/Background';
import Main from './components/main/Main';
import Nav from './components/navbar/Nav';


function App() {
  return (
      <div className="main">
        <Background/>
      <Nav/>
      <Main/>
    </div>
  );
}

export default App;
