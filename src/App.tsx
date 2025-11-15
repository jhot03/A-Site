import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Testimonies from './pages/Testimonies';
import Header from './components/Header';
import Footer from './components/Footer';
import  AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
        <AnimatedBackground />
      </div>
    </Router>
  );
}

export default App;