import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AdminLayout } from './components/layout/AdminLayout';
import { LandingPage } from './pages/LandingPage';
import { SubjectDashboard } from './pages/SubjectDashboard';
import { SubjectView } from './pages/SubjectView';
import { ExamResults } from './pages/ExamResults';
import { SplashScreen } from './components/ui/SplashScreen';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import PendingApproval from './pages/PendingApproval';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/admin/AdminDashboard';
import PendingRequests from './pages/admin/PendingRequests';
import StudentList from './pages/admin/StudentList';
import AdminChat from './pages/admin/AdminChat';
import AdminAnnouncements from './pages/admin/AdminAnnouncements';

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      <Router>
        <Routes>
          {/* Public routes with Navbar */}
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="subjects" element={<SubjectDashboard />} />
            <Route path="subjects/:subjectId" element={<SubjectView />} />
            <Route path="results" element={<ExamResults />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectId" element={<ProjectDetails />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Auth routes (no layout wrapper) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pending-approval" element={<PendingApproval />} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="pending" element={<PendingRequests />} />
            <Route path="students" element={<StudentList />} />
            <Route path="chat" element={<AdminChat />} />
            <Route path="announcements" element={<AdminAnnouncements />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

