import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { LandingPage } from './pages/LandingPage';
import { SubjectDashboard } from './pages/SubjectDashboard';
import { SubjectView } from './pages/SubjectView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="subjects" element={<SubjectDashboard />} />
          <Route path="subjects/:subjectId" element={<SubjectView />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
