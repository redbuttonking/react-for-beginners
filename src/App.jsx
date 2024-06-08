import TvSeries from './pages/TvSeries';
import Detail from './pages/Detail';
import Movies from './pages/Movies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './pages/Search';
import './styles/glober.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/react-for-beginners" element={<Movies />} />
        <Route path="/TVseries" element={<TvSeries />}></Route>
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
