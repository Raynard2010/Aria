import './RightSidebar.css';
import placeholder from "../assets/placeholder.svg"
import dizzy from "../assets/dizzy.png"
import followed from "../assets/followed.jpg"
import natural from "../assets/natural.jpg"
import imaginary from '../assets/imaginary.jpg'
import zombie from '../assets/zombie.jpg'
import justify from '../assets/justify.jpg'
import believe from '../assets/believe.jpg'


const RightSidebar = () => {
  return(
  <aside className="right-sidebar">
    <div className="top">
      <span className="queue-label">QUEUE</span>

        <hr />
    </div>


    <div className="bottom">
      <div className="song-box">
        <img src={followed} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Rejecta</label>
          <label className="song-name-label">Followed</label>
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
        <img src={imaginary} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Brennan Heart</label>
          <label className="song-name-label">Imaginary</label>
        </div>
      </div>

      <div className="song-box">
        <img src={justify} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Sefa</label>
          <label className="song-name-label">Justify</label>
        </div>
      </div>

      <div className="song-box">
        <img src={believe} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">B-Front</label>
          <label className="song-name-label">Believe</label>
        </div>
      </div>
      <div className="song-box">
        <img src={zombie} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Ran-D</label>
          <label className="song-name-label">Zombie</label>
        </div>
      </div>
      <div className="song-box">
        <img src={dizzy} alt="song image" className="song-img" />
        <div className="song-desc">
          <label className="artist-name-label">Goo Goo Dolls</label>
          <label className="song-name-label">Dizzy</label>
        </div>
      </div>

    </div>
  </aside>
  );
};

export default RightSidebar;