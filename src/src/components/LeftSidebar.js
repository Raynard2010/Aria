import './LeftSidebar.css';
import logo from "../assets/logo.png";
import homeicon from "../assets/homeicon.png";
import { Link } from 'react-router-dom';
import historyicon from "../assets/history.png";
import cover1 from "../assets/playlistcover1.jpg"
import cover2 from "../assets/playlistcover2.jpg"
import cover3 from "../assets/playlistcover3.jpg"


const LeftSidebar = () => {
  return(
  <aside>
    <div className="top">

        <div className="logo">
            <Link to="/Home">

            <div className="outer-circle">
            <div className="inner-circle">
                <img src={logo} alt="Logo" className="lotus-icon" />
            </div>
            </div>
                    </Link>

        </div>

        <div className="home-div">
          <Link to="/Home" className="home-link">
          <img alt="HomeIcon" className="homeicon-img" src={homeicon}/>
          <span className="home-label">HOME</span>
        </Link>
        </div>

        <div className="history-div">
          <Link to="/History" className="history-link">
          <img alt="historyicon" className="history-img" src={historyicon}/>
          <span className="history-label">HISTORY</span>
          </Link>
        </div>

        <hr />
    </div>

    <div className="bottom">
      <span className="playlist-label">PLAYLIST</span>

          <Link to="/Playlist" className="playlist-link">
          <img alt="playlisticon" className="playlist-img" src={cover1}/>
          </Link>

          <Link to="/Playlist" className="playlist-link">
          <img alt="playlisticon" className="playlist-img" src={cover2}/>
          </Link>

          <Link to="/Playlist" className="playlist-link">
          <img alt="playlisticon" className="playlist-img" src={cover3}/>
          </Link>

          {/* <Link to="/Playlist" className="playlist-link">
          <img alt="playlisticon" className="playlist-img" src={placeholder}/>
          </Link> */}
    </div>
  </aside>
  );
};

export default LeftSidebar;