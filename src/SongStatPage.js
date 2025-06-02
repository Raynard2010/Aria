import Header from './/components/ArtistHeader.js'
import './SongStatPage.css'
import placeholder from './assets/placeholder.svg';
import landmines from './assets/landmines.jpg'


function App() {
  return (
    <div className="song-stat-page">
      <Header />

      <div className="your-songs-container">

        <div className="song-box">
         <img
          src={landmines}
          alt="Song cover"
          className="song-image"
        />
            <div className="song-info">
            <h2 className="song-title">Landmines</h2>
                <div className="info-box">
                    <div className="left-info">
                    <div className="genre-div">
                        <label className="genre">Genre: </label><p className="genre">Hardstyle</p>
                    </div>
                    <p className="streams-label">Total Streams</p>
                    <p className="streams-value">1.474.456 streams</p>
                    </div>
                    <div className="right-info">
                    <p className="revenue-label">Total Revenue</p>
                    <p className="revenue-value">$3509.21</p>
                    </div>
                </div>
            </div>


        </div>

            <div className="button-container">
                 <button>Upload lyrics</button>
            </div>

      </div>


    </div>
  );
}

export default App;