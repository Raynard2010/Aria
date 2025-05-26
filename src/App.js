import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogInPage from './LogInPage';
import LogInForArtistsPage from './LogInForArtistsPage';
import RegisterPage from './RegisterPage';
import RegisterForArtistsPage from './RegisterForArtistsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/LogInForArtists" element={<LogInForArtistsPage />} />
        <Route path="/Register" element={<RegisterPage/>} />
        <Route path="/RegisterForArtists" element={<RegisterForArtistsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;