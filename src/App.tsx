import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destination.tsx';
import Packages from './pages/Packages';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import DestinationDetails from './pages/DestinationDetails';
import PackageDetails from './pages/PackageDetails.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetails />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:id" element={<PackageDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App