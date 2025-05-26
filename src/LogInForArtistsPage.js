import logo from './logo.png';
import './LogInForArtistsPage.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (

    <div className="login-page">
      <div className="login-card">
        <div className="back-button"><Link to="/" className="back-link">&lt; Back</Link></div>

        <img src={logo} alt="Lotus Logo" className="logo" />

        <h2 className="for-artists-text">FOR ARTISTS</h2>


        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit">Log in</button>

          <p className="signup-link">
            Don't have an account? <Link to="/RegisterForArtists">Click here</Link>
          </p>
        </form>
      </div>


    </div>
  );
}

export default App;
