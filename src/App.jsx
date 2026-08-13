import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { LandingPage } from './pages/LandingPage';
import { SubjectDashboard } from './pages/SubjectDashboard';
import { SubjectView } from './pages/SubjectView';
import { ExamResults } from './pages/ExamResults';
import { SplashScreen } from './components/ui/SplashScreen';

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="subjects" element={<SubjectDashboard />} />
            <Route path="subjects/:subjectId" element={<SubjectView />} />
            <Route path="results" element={<ExamResults />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
