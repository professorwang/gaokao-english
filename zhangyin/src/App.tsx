import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ExercisePage } from './pages/ExercisePage';
import { PracticePage } from './pages/PracticePage';
import { AnalysisPage } from './pages/AnalysisPage';
import { ProgressPage } from './pages/ProgressPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exercises" element={<ExercisePage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/analysis/:id" element={<AnalysisPage />} />
            <Route path="/progress" element={<ProgressPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;