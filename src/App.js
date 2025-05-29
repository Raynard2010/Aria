import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogInPage from './LogInPage';
import LogInForArtistsPage from './LogInForArtistsPage';
import RegisterPage from './RegisterPage';
import RegisterForArtistsPage from './RegisterForArtistsPage';
import HomeArtistPage from './HomeArtistPage';
import SongStatPage from './SongStatPage';

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

      </Routes>
    </Router>
  );
}

export default App;