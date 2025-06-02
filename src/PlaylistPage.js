import './PlaylistPage.css';
import placeholder from './/assets/placeholder.svg'
import playbutton from './/assets/black-triangle.png'
import playlistcover from './/assets/playlistcover1.jpg'
import iris from './/assets/iris.jpg'
import ror from './/assets/renaissanceofrave.jpg'
import natural from './/assets/natural.jpg'
import followed from './/assets/followed.jpg'


function App() {
  return (
    <div className="playlist-page">
        <label>Playlist</label>

        <div className="playlist-info-box">
          <img src={playlistcover} alt="playlist image" className="playlist-img" />
          <div className="playlist-info">
          <label>My Playlist</label>
          <button>
          <div className="play-button-border">
                      <img src={playbutton} alt="play button" className="play-btn-triangle" />
            </div>

          </button>

          </div>
        </div>


              <div className="song-box">
        <img src={iris} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Goo Goo Dolls</label>
          <label className="song-name-label">Iris</label>
        </div>
        </div>


              <div className="song-box">
        <img src={ror} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Sub Zero Project</label>
          <label className="song-name-label">Renaissance Of Rave</label>
        </div>
        </div>

              <div className="song-box">
        <img src={natural} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Davide Sonar</label>
          <label className="song-name-label">Natural</label>
        </div>
        </div>

              <div className="song-box">
        <img src={followed} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Rejecta</label>
          <label className="song-name-label">Followed</label>
        </div>
        </div>

    </div>
  );
}

export default App;
