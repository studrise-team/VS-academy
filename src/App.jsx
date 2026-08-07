import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/layout/Layout';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { PublicRoute } from './components/auth/PublicRoute';
import { AdminRoute } from './components/auth/AdminRoute';
import { LoadingSpinner } from './components/ui/LoadingSpinner';

// Lazy-loaded pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const SubjectDashboard = lazy(() => import('./pages/SubjectDashboard'));
const SubjectView = lazy(() => import('./pages/SubjectView'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Profile = lazy(() => import('./pages/Profile'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const PendingApproval = lazy(() => import('./pages/PendingApproval'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminLayout = lazy(() => import('./components/layout/AdminLayout').then(m => ({ default: m.AdminLayout })));
const PendingRequests = lazy(() => import('./pages/admin/PendingRequests'));
const StudentList = lazy(() => import('./pages/admin/StudentList'));
const AdminChat = lazy(() => import('./pages/admin/AdminChat'));
const AdminAnnouncements = lazy(() => import('./pages/admin/AdminAnnouncements'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<LoadingSpinner message="Loading page..." />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LandingPage />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<ProjectDetails />} />
              <Route path="login" element={
                <PublicRoute><Login /></PublicRoute>
              } />
              <Route path="register" element={
                <PublicRoute><Register /></PublicRoute>
              } />
              <Route path="pending" element={<PendingApproval />} />
              
              {/* Protected routes — require approved login */}
              <Route path="profile" element={
                <ProtectedRoute><Profile /></ProtectedRoute>
              } />
              <Route path="subjects" element={
                <ProtectedRoute><SubjectDashboard /></ProtectedRoute>
              } />
              <Route path="subjects/:subjectId" element={
                <ProtectedRoute><SubjectView /></ProtectedRoute>
              } />
              
              {/* 404 Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Admin routes with dedicated layout */}
            <Route path="/admin" element={
              <AdminRoute><AdminLayout /></AdminRoute>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="announcements" element={<AdminAnnouncements />} />
              <Route path="chat" element={<AdminChat />} />
              <Route path="pending" element={<PendingRequests />} />
              <Route path="students" element={<StudentList statusFilter="all" />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
