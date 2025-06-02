import './ViewArtistPage.css'
import placeholder from './/assets/placeholder.svg'
import playbutton from './/assets/black-triangle.png'
import iris from './/assets/iris.jpg'
import dizzy from './/assets/dizzy.png'

function App() {
  return (
    <div className="view-artist-page">
      <div className="who-is-box">
        <div>
          <h2>Goo Goo Dolls</h2>
        </div>

          <button>
            Listen Now
          </button>
      </div>

      <div className="bottom-box">
        <label>TOP RELEASE</label>
        <div className="song-bar">
              <div className="song-box">
        <img src={iris} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Goo Goo Dolls</label>
          <label className="song-name-label">Iris</label>

        </div>
                  <button>
          <div className="play-button-border">
                      <img src={playbutton} alt="play button" className="play-btn-triangle" />
            </div>

          </button>
        </div>
        

      </div>

        <div className="you-might-like-box">
                <div className="song-bar">
                    <div className="song-box">
                <img src={dizzy} alt="song image" className="song-img" />
                <div className="song-desc">
                <label className="artist-name-label">Goo Goo Dolls</label>
                <label className="song-name-label">Dizzy</label>
                </div>
                                  <button>
          <div className="play-button-border">
                      <img src={playbutton} alt="play button" className="play-btn-triangle" />
            </div>

          </button>
                </div>
                
            </div>
</div>



      
              </div>

    </div>
  );
}

export default App;