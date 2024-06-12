import TvSeries from './pages/TvSeries';
import DetailMovie from './pages/DetailMovie';
import Movies from './pages/Movies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Search from './pages/Search';
import './styles/glober.css';
import DetaliTvSeries from './pages/DetaliTvSeries';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/react-for-beginners" element={<Movies />} />
        <Route path="/TVseries" element={<TvSeries />}></Route>
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
        <Route path="/tv/:id" element={<DetaliTvSeries />} />
      </Routes>
    </Router>
  );
}

export default App;
