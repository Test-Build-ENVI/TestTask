import React, { useState } from "react";
import { Navigation } from "./components/Navigation";
import { ElementPostProject } from "./screens/ElementPostProject";
import { ProjectListing } from "./screens/ProjectListing";
import { Dashboard } from "./screens/Dashboard";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

export const App = (): JSX.Element => {
  const [currentScreen, setCurrentScreen] = useState("dashboard");

  const renderScreen = () => {
    switch (currentScreen) {
      case "dashboard":
        return <Dashboard />;
      case "projects":
        return <ProjectListing />;
      case "post-project":
        return <ElementPostProject />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to login if not authenticated */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
            <div className="min-h-screen bg-gray-50">
              <Navigation currentScreen={currentScreen} onScreenChange={setCurrentScreen} />
              {renderScreen()}
            </div>
            </ProtectedRoute>
          }
        />
        {/* Public routes - no authentication required */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Catch all other routes and redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};