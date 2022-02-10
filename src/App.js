import { useContext, useReducer, useState } from "react";
import Store from "./Store/Store";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useHistory,
} from "react-router-dom";

import "./App.css";
import Background from "./components/Background/Background";
import Main from "./components/main/Main";
import Nav from "./components/navbar/Nav";

import Sponsors from "./Pages/sponsors/Sponsors";
import Reducer from "./Store/Reducer";

import About from "./Pages/about/About";
import Team from "./Pages/team/team";
import EventDescription from "./Pages/eventDescription/EventDescription";
import Events from "./Pages/events/Events";
import Category from "./Pages/category/Category";
import GuestLecture from "./Pages/guestLecture/GuestLecture";
import ErrorPage from "./Pages/errorPage/ErrorPage";
import UserProfilePage from "./Pages/userProfilePage/UserProfilePage";
import Testimonial from "./Pages/testimonial/Testimonial";
import Developers from "./Pages/developers/Developers";
import SplashScreen from "./components/extras/Splash";
import Footer from "./components/extras/Footer";

function App() {
  const initialState = useContext(Store);
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [splash, setSplash] = useState(true);
  let routes = (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/lectures" element={<GuestLecture />} />
      <Route path="/categories" element={<Category />} />
      <Route path="/sponsers" element={<Sponsors />} />
      <Route path="/events/:category" element={<Events />} />
      <Route path="/devs" element={<Developers />} />
      <Route
        path="/eventdetails/:category/:event"
        element={<EventDescription />}
      />
      <Route path="/user" element={<UserProfilePage />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
  setTimeout(() => {
    setSplash(false);
  }, 2000);

  return (
    <Store.Provider value={[state, dispatch]}>
      <div className="main">
        <Background />
        <Router>
          {splash ? (
            <SplashScreen />
          ) : (
            <>
              <Nav />
              <div className="routes">{routes}</div>
              <Footer/>
            </>
          )}
        </Router>
      </div>
    </Store.Provider>
  );
}

export default App;
