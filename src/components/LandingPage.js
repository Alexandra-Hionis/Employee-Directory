import logo from './search-logo.gif';
import './App.css';

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Welcome to the Employee Directory!
        </p>
      </header>
    </div>
  );
}

export default LandingPage;