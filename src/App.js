import { useContext, useReducer, useState } from "react";
import Store from "./Store/Store";

import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";
import  Sponsors  from "./Pages/sponsors/Sponsors";

import Reducer from "./Store/Reducer";
import  Home  from "./Pages/home/Home";
import  About  from "./Pages/about/About";
import  Team  from "./Pages/team/team";
import  Developers  from "./Pages/developers/Developers";
import  EventDescription  from "./Pages/eventDescription/EventDescription";
import  Events  from "./Pages/events/Events";
import  Queries  from "./Pages/queries/Queries";
import  Category  from "./Pages/category/Category";
import  GuestLecture  from "./Pages/guestLecture/GuestLecture";
import  ErrorPage  from "./Pages/errorPage/ErrorPage";
import  UserProfilePage  from "./Pages/userProfilePage/UserProfilePage";
import  Testimonial  from "./Pages/testimonial/Testimonial";
// import SplashScreen from "./Components/SplashScreen";
import TopBar from "./components/TopBar";
// import Footer from "./Components/Footer";

function App() {
  const initialState = useContext(Store);
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [splash, setSplash] = useState(true);
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/about" exact component={About} />

      <Route path="/team" exact component={Team} />

      <Route path="/devs" exact component={Developers} />

      <Route path="/lectures" exact component={GuestLecture} />

      <Route path="/categories" exact component={Category} />

      <Route path="/sponsers" exact component={Sponsors} />

      <Route path="/events/:category" exact component={Events} />

      <Route
        path="/eventdetails/:category/:event"
        exact
        component={EventDescription}
      />
      <Route path="/user" exact component={UserProfilePage} />
      <Route path="/sponsors" exact component={Sponsors} />
      {/* <Route path="/testimonial" exact component={Testimonial} /> */}
      <Route path="*" component={ErrorPage} />
    </Switch>
  );

  // setTimeout(() => {
  //   setSplash(false);
  // }, 2000);

  // if (splash) return <SplashScreen />;

  return (
     <Store.Provider value={[state, dispatch]}>
      <div className="App">
        <Router>
<<<<<<< HEAD
          <Sponsors />
          <Testimonial />
          < GuestLecture />
=======
          <TopBar />
          {/* < GuestLecture /> */}
>>>>>>> 143befd5b135d1ec7d803d224f907587a25b9616
          {/* <TopBar />  */}
          {routes}
        </Router>
        {/* <Queries /> */}
        {/* <Footer /> */}
      </div>
     </Store.Provider>
  );
}

export default App;