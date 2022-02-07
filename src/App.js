import './App.css';
import Background from './components/Background/Background';
import Main from './components/main/Main';
import Nav from './components/navbar/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Developers from './pages/Developers/Developers';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Background />
        <Nav />
        <Routes>
          <Route path='/techno-land' element={<Main />} />
          <Route path='/techno-land/dev' element={<Developers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
