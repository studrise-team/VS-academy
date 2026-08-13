import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LoadingSpinner } from '../ui/LoadingSpinner';

export function PublicRoute({ children }) {
  const { currentUser, loading } = useAuth();

  // If the user is logged in, redirect them away from the public route (e.g., Login/Register)
  if (currentUser) {
    // If they have admin privileges, send to admin dashboard
    if (currentUser?.isAdmin) {
      return <Navigate to="/admin" replace />;
    }
    // If their account is still pending, send to pending page
    if (currentUser?.status === 'pending') {
      return <Navigate to="/pending" replace />;
    }
    // Otherwise send to the subjects dashboard
    return <Navigate to="/subjects" replace />;
  }

  // If not logged in, render the child component (Login or Register page)
  return children;
}
