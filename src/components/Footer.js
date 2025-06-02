import './Footer.css';
import cover from "../assets/iris.jpg"
import playbutton from "../assets/play-button.png"
import prevbutton from "../assets/prev-button.png"
import nextbutton from "../assets/next-button.png"
import lyrics from "../assets/lyric.png"
import volume from "../assets/volume.png"
import vocal from "../assets/vocal.png"
import instrument from "../assets/instrument.png"

import {  Link } from 'react-router-dom';


const Footer = () => {
  return(
  <footer className="footer">
    <div className="song-box">
        <img src={cover} alt="Song cover" className="song-img"/>

        <div className="song-info">
            <Link to="/ViewArtist" className="footer-link">
                        <label>Goo Goo Dolls</label>

            </Link>
            <Link to="/Song" className="footer-link"> 
                        <label>Iris</label>

            </Link>
        </div>
    </div>

    <div className="player-box">
        <div className="button-box1">
        <button>
        <img src={prevbutton} alt="prevbutton" className="player-img"/>
        </button>

        <button>
        <img src={playbutton} alt="playbutton" className="player-img"/>
        </button>

        <button>
        <img src={nextbutton} alt="nextbutton" className="player-img"/>
        </button>
        </div>

        <div className="player-bar">
            <label>00:00</label>
            <input type="range" className="music-bar"></input>
            <label>03:50</label>
        </div>

    </div>

    <Link to="/Lyric" className="lyric-link">
        <img src={lyrics} alt="lyric icon" className="lyric-img"/>
    </Link>



    <div className="volume-box">
        <div className="subvolume-box"> 
        <img src={volume} alt="lyric icon" className="volume-img"/>
        <input type="range" className="volume-bar"></input>

        </div>

        <div className="subvolume-box"> 
        <img src={vocal} alt="lyric icon" className="volume-img"/>
        <input type="range" className="volume-bar"></input>
        </div>


        <div className="subvolume-box"> 
        <img src={instrument} alt="lyric icon" className="volume-img"/>
        <input type="range" className="volume-bar"></input>
        </div>

    </div>

    <div>

    </div>
  </footer>
  );
};

export default Footer;