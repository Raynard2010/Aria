import Header from './/components/ArtistHeader.js'
import './HomeArtistPage.css'
import { Link } from 'react-router-dom';
import placeholder from './assets/placeholder.svg'
import landmines from './assets/landmines.jpg'
import thruthesmoke from './assets/thru-the-smoke.jpg'


function App() {
  return (
    <div className="home-artist-page">
      <Header />

      <div className="your-songs-container">
        <label className="your-song-label">Your Songs</label>

        <div className="song-bar">
              <div className="song-box">
                <img src={landmines} alt="song image" className="song-img" />
                    <div className="song-desc">
                      <label className="song-name-label">Landmines</label>
                    </div>
                  <Link to="/SongStat">
                  <button className="view-stats-button">View stats
                  </button>
                  </Link>

                  </div>
                  
        </div>

        <div className="song-bar">
              <div className="song-box">
                <img src={thruthesmoke} alt="song image" className="song-img" />
                    <div className="song-desc">
                      <label className="song-name-label">thru the smoke</label>
                    </div>
                  <Link to="/SongStat">
                  <button className="view-stats-button">View stats
                  </button>
                  </Link>

                  </div>
                  
        </div>
        
      </div>

      <div className="button-container">
        
        <Link to="/HomeArtist" className="link-button">
                Receive revenue
        </Link>


        <Link to="/UploadSong" className="link-button">
                Upload a new song
        </Link>
      </div>

    </div>
  );
}

export default App;