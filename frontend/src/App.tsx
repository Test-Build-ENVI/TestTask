import React, { useState } from "react";
import { Navigation } from "./components/Navigation";
import { ElementPostProject } from "./screens/ElementPostProject";
import { ProjectListing } from "./screens/ProjectListing";
import { Dashboard } from "./screens/Dashboard";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50">
              <Navigation currentScreen={currentScreen} onScreenChange={setCurrentScreen} />
              {renderScreen()}
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};