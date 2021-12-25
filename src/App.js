import logo from './logo.svg';
import './App.css';
import SignInButton from './Components/signInButton';

export default function App() {
  return (
    <div className="App">
      <h1>
        Hello
      </h1>
      {console.log(process.env)}
     <SignInButton/>
    </div>
  );
}
