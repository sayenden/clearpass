import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Requirements from './pages/Requirements';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Start from './pages/Start';
import Capture from './pages/Capture';
import Review from './pages/Review';
import Results from './pages/Results';
import Enterprise from './pages/Enterprise';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/clearpass">
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/requirements" element={<Requirements />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/start" element={<Start />} />
            <Route path="/capture" element={<Capture />} />
            <Route path="/review" element={<Review />} />
            <Route path="/results" element={<Results />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/support/faq" element={<FAQ />} />
            <Route path="/support/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
