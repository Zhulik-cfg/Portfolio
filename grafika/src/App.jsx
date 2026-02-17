import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Builder from './pages/Builder';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              {/* Footer is now part of the scroll flow in Hero or just below it */}
              <Footer />
            </>
          } />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </main>
    </div>
  );
}

export default App
