import Header from './/components/ArtistHeader.js'
import './UploadSongPage.css'
import { Link } from 'react-router-dom';
import placeholder from './assets/placeholder.svg';
import tick from './assets/tick.png';

function App() {
  return (
    <div className="upload-song-page">
      <Header />

      <div className="upload-song-container">
        <div>
            <div className="label-container">
            <label className="upload-song-label">Upload a song</label>
            </div>
        </div>

        <div className="song-detail-box">
            <div className="image-box">
            <button className="image-button">
            <img
            src={placeholder}
            alt="Song cover"
            className="song-image"
            />
            </button>
            </div>

            <div className="song-info-box">
                <form className="upload-song-form" id="upload-song-form">
                <label>Song Title</label>
                <input type="text" placeholder="Enter your song title" />

                <label>Genre</label>
                <input type="text" placeholder="Enter your song genre"/>

                <div className="upload-options">
                    <label className="upload-option">
                    <input className="radio-button" type="radio" name="upload-type" value="full" /> Upload song entirely
                    </label>
                    <div className="button-div">
                        <button>Upload song file</button>
                        <img src={tick} alt="Tick" className="tick-image"/>
                    </div>

                    <label className="upload-option">
                    <input className="radio-button" type="radio" name="upload-type" value="seperated" /> Seperate vocal and instrument
                    </label>
                    <div className="button-div">
                        <button>Upload vocal file</button>
                        <img src={tick} alt="Tick" className="tick-image"/>
                    </div>
                    <div className="button-div">
                        <button>Upload instrument file</button>
                        <img src={tick} alt="Tick" className="tick-image"/>
                    </div>
                </div>

                <label>Upload lyrics (optional)</label>
                    <div className="button-div">
                        <button>Upload lyrics</button>
                        <img src={tick} alt="Tick" className="tick-image"/>
                    </div>
                </form>

            </div>
            <div>

            </div>

        </div>

<div className="upload-button-box">        
    <button type="submit" form="upload-song-form">Upload song</button>
    <label>Congratulations!</label>
    <label>Song uploaded!</label>
</div>
      </div>
    </div>
  );
}

export default App;