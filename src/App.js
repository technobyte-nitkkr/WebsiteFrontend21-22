import logo from "./logo.svg";
import "./App.css";
import Navbar from "./animations/navbar";
import Contact from "./Pages/contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Developers from "./Pages/developers";
import Home from "./components/Home";
import Team from "./Pages/team";
import GuestLecture from './Pages/lecture'

function App() {
  return (
    <div className="App">
      <Router>
        {
          //<Developers></Developers>
        }
        {
          //<Contact></Contact>
        }
        {<GuestLecture></GuestLecture>}
        {
          //<Team></Team>
        }
      </Router>
    </div>
  );
}

export default App;
