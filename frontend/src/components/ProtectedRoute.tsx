import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user has a valid token - this prevents unauthorized access
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  // Show a nice loading spinner while we check authentication status
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f8fbff] to-[#e2f7ff]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#27aae2]"></div>
      </div>
    );
  }

  // Redirect to login if user isn't authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // User is authenticated, so render the protected content
  return <>{children}</>;
};

export default ProtectedRoute; 