import { useContext, useReducer, useState } from "react";
// import Store from "./Store/Store";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useHistory,
} from "react-router-dom";
import { Sponsors } from "./Pages/Sponsors";

// import Reducer from "./Store/Reducer";
import { Home } from "./Pages/home/Home";
import { About } from "./Pages/About";
import { Team } from "./Pages/team/Team";
import { Developers } from "./Pages/Developers";
import { EventDescription } from "./Pages/EventDescription";
import { Events } from "./Pages/Events";
import { Queries } from "./Pages/Queries";
import { Category } from "./Pages/Category";
import { GuestLecture } from "./Pages/GuestLecture";
import { ErrorPage } from "./Pages/ErrorPage";
import { UserProfilePage } from "./Pages/UserProfilePage";
import { Testimonial } from "./Pages/Testimonial";
// import SplashScreen from "./Components/SplashScreen";
// import TopBar from "./Components/TopBar";
// import Footer from "./Components/Footer";

function App() {
  // const initialState = useContext(Store);
  // const [state, dispatch] = useReducer(Reducer, initialState);
  // const [splash, setSplash] = useState(true);
  let routes = (
    <Routes>
      <Route path="/"  element={<Home/>} />

      <Route path="/about"  element={<About/>} />

      <Route path="/Team"  element={<Team/>} />

      <Route path="/devs"  element={<Developers/>} />

      <Route path="/lectures"  element={<GuestLecture/>} />

      <Route path="/categories"  element={<Category/>} />

      <Route path="/sponsers"  element={<Sponsors/>} />

      <Route path="/events/:category"  element={<Events/>} />

      <Route path="/eventdetails/:category/:event" element={<EventDescription/>} />
      <Route path="/user"  element={<UserProfilePage/>} />
      <Route path="/sponsors"  element={<Sponsors/>} />
      <Route path="/testimonial"  element={<Testimonial/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );

  // setTimeout(() => {
  //   setSplash(false);
  // }, 2000);

  // if (splash) return <SplashScreen />;

  return (
    // <Store.Provider value={[state, dispatch]}>
      <div className="App">
        <Router>
          {/* <TopBar /> */}
          {routes}
        </Router>
        <Queries />
        {/* <Footer /> */}
      </div>
    // </Store.Provider>
  );
}

export default App;