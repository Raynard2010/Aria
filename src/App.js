import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogInPage from './LogInPage';
import LogInForArtistsPage from './LogInForArtistsPage';
import RegisterPage from './RegisterPage';
import RegisterForArtistsPage from './RegisterForArtistsPage';
import HomeArtistPage from './HomeArtistPage';
import SongStatPage from './SongStatPage';
import UploadSongPage from './UploadSongPage';
import HomePage from './HomePage';
import LyricPage from './LyricPage';
import PlaylistPage from './PlaylistPage';
import HistoryPage from './HistoryPage';
import SongPage from './SongPage'
import ViewArtistPage from './ViewArtistPage'

import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/LogInForArtists" element={<LogInForArtistsPage />} />
        <Route path="/Register" element={<RegisterPage/>} />
        <Route path="/RegisterForArtists" element={<RegisterForArtistsPage/>} />
        <Route path="/HomeArtist" element={<HomeArtistPage/>} />
        <Route path="/SongStat" element={<SongStatPage/>} />
        <Route path="/UploadSong" element={<UploadSongPage/>} />

        <Route element={<Layout />}>
          <Route path="/Home" element={<HomePage/>} />
          <Route path="/Lyric" element={<LyricPage/>} />
          <Route path="/Playlist" element={<PlaylistPage/>} />
          <Route path="/History" element={<HistoryPage/>} />
          <Route path="/Song" element={<SongPage/>} />
          <Route path="/ViewArtist" element={<ViewArtistPage/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;