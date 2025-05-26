import logo from './logo.png';
import './RegisterForArtistsPage.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="register-page">
      <div className="register-card">
        <div className="back-button"><Link to="/LogInForArtists" className="back-link">&lt; Back</Link></div>

        <img src={logo} alt="Lotus Logo" className="logo" />
        <h2 className="for-artists-text">FOR ARTISTS</h2>


        <form className="register-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Username</label>
          <input type="text" placeholder="Enter your username"/>

          <label>Age</label>
          <input type="number" placeholder="Enter your age"/>

          <label>Gender</label>
          <div className="gender-options">
            <label className="gender-option">
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label className="gender-option">
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit">Register</button>

        </form>
      </div>
    </div>
  );
}

export default App;
