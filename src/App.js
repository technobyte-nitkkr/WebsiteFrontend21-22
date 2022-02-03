import './App.css';
import gear1 from "./assets/gear1.png";
import gear2 from "./assets/gear2.png";
import gear3 from "./assets/gear3.png";


function App() {
  return (
      <div className="main">
        <img src={gear1} className="gear1" alt="" />
        <img src={gear2} className="gear2" alt="" />
        <img src={gear3} className="gear3" alt="" />
        <div className='top-circle'>
        </div>
        <div className='bottom-circle'>
      </div>
      <div className='nav'>
        <div className='nav-comp'>Home</div>
        <div className='nav-comp'>About Us</div>
        <div className='nav-comp'>Events</div>
        <div className='nav-comp'>Register</div>
      </div>
      <div className='head-main'>TECHSPARDHA</div>
      <div className='time'>24th - 28th February</div>
      <div className='desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</div>
      <div className='buttons'>
        <div className='regs'>Register</div>
        <div className='learn'>Learn More</div>
      </div>
    </div>
  );
}

export default App;
