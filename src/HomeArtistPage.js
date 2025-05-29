import Header from './/components/ArtistHeader.js'
import './HomeArtistPage.css'
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="home-artist-page">
      <Header />

      <div className="your-songs-container">
        <label className="your-song-label">Your Songs</label>
      </div>

      <div className="button-container">
        {/* <button>Receive revenue</button> */}
        
        <Link to="/HomeArtist" className="link-button">
                Receive revenue
        </Link>


        <Link to="/Register" className="link-button">
                Upload a new song
        </Link>
      </div>
    </div>
  );
}

export default App;