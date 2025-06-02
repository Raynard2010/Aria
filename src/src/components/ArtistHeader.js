import './ArtistHeader.css';
import homeicon from "../assets/homeicon.png";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import profileplaceholder from "../assets/profileplaceholder.jpg"


const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <Link to="/HomeArtist" className="home-link">
        <img alt="HomeIcon" className="homeicon-img" src={homeicon}/>
        <span className="home-label">HOME</span>
        </Link>
      </div>
      <div className="right">
        <img src={profileplaceholder} alt="Profile" className="profile-img" />
        <label className="artist-name">Artist name</label>
      </div>
    </header>
  );
};

export default Header;
