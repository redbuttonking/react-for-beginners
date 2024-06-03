import Detail from './pages/Detail';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/react-for-beginners" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
