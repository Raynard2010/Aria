import './HomePage.css'
import placeholder from './assets/placeholder.svg'
import sanctuary from './assets/sanctuary.jpg'
import imaginary from './assets/imaginary.jpg'
import dizzy from './assets/dizzy.png'
import release from './assets/release.jpg'
import zombie from './assets/zombie.jpg'
import justify from './assets/justify.jpg'

function App() {
  return (
    <div className="home-page">
      <div className="who-is-box">
        <div>
          <label>WHO IS</label>
          <h2>LANY</h2>
        </div>

          <button>
            Listen Now
          </button>
      </div>

      <div className="bottom-box">
        <label>NEW RELEASE</label>
        <div className="song-bar">
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


                      <div className="song-box">
        <img src={zombie} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Ran-D</label>
          <label className="song-name-label">Zombie</label>
        </div>
        </div>
      </div>

<div className="you-might-like-box">
              <label className="you-might-like">YOU MIGHT LIKE</label>
        <div className="song-bar">
              <div className="song-box">
        <img src={imaginary} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Brennan Heart</label>
          <label className="song-name-label">Imaginary</label>
        </div>
        </div>

                      <div className="song-box">
        <img src={dizzy} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Goo Goo Dolls</label>
          <label className="song-name-label">Dizzy</label>
        </div>
        </div>


                      <div className="song-box">
        <img src={justify} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Sefa</label>
          <label className="song-name-label">Justify</label>
        </div>
        </div>
      </div>
</div>



      
              </div>

    </div>
  );
}

export default App;