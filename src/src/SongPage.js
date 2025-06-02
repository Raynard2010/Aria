import './SongPage.css';
import cover from './/assets/iris.jpg'
import playbutton from './/assets/black-triangle.png'
import plus from './/assets/plus.png'
import cover1 from './/assets/playlistcover1.jpg'
import cover2 from './/assets/playlistcover2.jpg'
import cover3 from './/assets/playlistcover3.jpg'


import {useState} from 'react'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);


  return (
    <div className="song-page">

        <div className="playlist-info-box">
          <img src={cover} alt="playlist image" className="playlist-img" />
          <div className="playlist-info">
          <label>Iris</label>
          <label className="sub-label">Goo Goo Dolls</label>
          <label className="sub-label">Genre: Rock</label>
            </div>

            <div className="button-box">
          <button>
          <div className="play-button-border">
                      <img src={playbutton} alt="play button" className="play-btn-triangle" />
            </div>
          </button>

          <button onClick={openOverlay}>

                              <div className="play-button-border">
                      <img src={plus} alt="plus button" className="plus-icon" />
            </div>
          </button>
                {isOpen && (
            <div className="overlay-div">
            <button onClick={closeOverlay}>
                      <img src={plus} alt="plus button" className="plus-icon" /> 
                      <label>New playlist</label>
            </button>
                        <button onClick={closeOverlay}>
                      <img src={cover1} alt="plus button" className="playlist-icon" /> 
                      <label>My Playlist</label>
            </button>

                        <button onClick={closeOverlay}>
                      <img src={cover2} alt="plus button" className="playlist-icon" /> 
                      <label>Playlist when sad</label>
            </button>

                        <button onClick={closeOverlay}>
                      <img src={cover3} alt="plus button" className="playlist-icon" /> 
                      <label>Cool playlist</label>
            </button>
            </div>
            )}

          </div>
        </div>

    </div>
  );
}

export default App;
