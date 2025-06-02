import './Header.css';
import searchicon from "../assets/search.png";
import profileplaceholder from "../assets/profileplaceholder.jpg"

const Header = () => {
  return(
  <header className="header">
    <div className="search-div">
            <img
            src={searchicon}
            alt="Search icon"
            className="search-image"
            />  
            
    <input className="search-tb" placeholder="Search..." />
    </div>

    
        <div className="right">
        <img src={profileplaceholder} alt="Profile" className="profile-img" />
        <label className="username">User name</label>

      </div>
  </header>
  );
};

export default Header;