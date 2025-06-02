import './HistoryPage.css';
import placeholder from './/assets/placeholder.svg'
import landmines from './/assets/landmines.jpg'
import rickroll from './/assets/rickroll.jpg'
import thruthesmoke from './/assets/thru-the-smoke.jpg'
import sanctuary from './/assets/sanctuary.jpg'
import release from './/assets/release.jpg'

function App() {
  return (
    <div className="history-page">
        <label>History</label>

              <div className="song-box">
        <img src={landmines} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Phuture Noize</label>
          <label className="song-name-label">Landmines</label>
        </div>
        </div>


              <div className="song-box">
        <img src={rickroll} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Rick Astley</label>
          <label className="song-name-label">Never Gonna Give You Up</label>
        </div>
        </div>

              <div className="song-box">
        <img src={thruthesmoke} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Phuture Noize</label>
          <label className="song-name-label">thru the smoke</label>
        </div>
        </div>

              <div className="song-box">
        <img src={sanctuary} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Joji</label>
          <label className="song-name-label">Sanctuary</label>
        </div>
        </div>

              <div className="song-box">
        <img src={release} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Atmozfears</label>
          <label className="song-name-label">Release</label>
        </div>
        </div>
    </div>
  );
}

export default App;
