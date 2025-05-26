import logo from './logo.png';
import './LogInPage.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="login-page">
      <div className="login-card">
        <img src={logo} alt="Lotus Logo" className="logo" />

        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <p className="artist-link">
            Log in as artist? <Link to="/LogInForArtists">Click here</Link>
          </p>

          <button type="submit">Log in</button>

          <p className="signup-link">
            Don't have an account? <Link to="/Register">Click here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
