import React, { useState } from "react";
import { Button } from "../ui/button";
import { 
  Home, 
  FolderOpen, 
  Plus, 
  MessageSquare, 
  User, 
  Settings,
  Menu,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
  currentScreen: string;
  onScreenChange: (screen: string) => void;
}

// Remove StripedLogo and use an image instead

// Modern, client-friendly SVG logo
const ModernLogo: React.FC = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 mr-3"
  >
    <defs>
      <linearGradient id="p-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#27aae2" />
        <stop offset="1" stopColor="#4ecdc4" />
      </linearGradient>
      <filter id="shadow" x="0" y="0" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.10" />
      </filter>
    </defs>
    <g filter="url(#shadow)">
      <path
        d="M10 6a4 4 0 0 1 4-4h12c8 0 14 5 14 12s-6 12-14 12h-8v10a4 4 0 0 1-4 4h-4V6zM18 8v12h8c5.523 0 10-3.134 10-7s-4.477-7-10-7h-8z"
        fill="url(#p-gradient)"
      />
      <rect x="10" y="36" width="8" height="6" rx="2" fill="#27aae2" />
    </g>
  </svg>
);

export const Navigation = ({ currentScreen, onScreenChange }: NavigationProps): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileUserMenuOpen, setMobileUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "projects", label: "Browse Projects", icon: FolderOpen },
    { id: "post-project", label: "Post Project", icon: Plus },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleNavigation = (screenId: string) => {
    onScreenChange(screenId);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    // Clear user session and redirect to login
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <ModernLogo />
              <span className="text-xl font-bold text-gray-900 font-['Poppins']">
                ProjectHub
              </span>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentScreen === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    className={`font-['Poppins'] font-medium ${
                      isActive 
                        ? "bg-[#27aae2] text-white hover:bg-[#2198ce]" 
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                    onClick={() => handleNavigation(item.id)}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                );
              })}
            </div>

            {/* User Menu */}
            <div className="relative flex items-center space-x-3">
              <Button
                variant="outline"
                className="font-['Poppins']"
                onClick={() => setUserMenuOpen((v) => !v)}
              >
                <User className="w-4 h-4 mr-2" />
                John Doe
              </Button>
              {userMenuOpen && (
                <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg border w-40 z-50">
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 font-['Poppins'] text-sm"
                    onClick={() => { setUserMenuOpen(false); handleNavigation('profile'); }}
                  >
                    Profile
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 font-['Poppins'] text-sm text-red-600"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-white shadow-lg border-b border-gray-200">
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.png" alt="ProjectHub Logo" className="w-16 h-16 mr-3" />
              <span className="text-xl font-bold text-gray-900 font-['Poppins']">
                ProjectHub
              </span>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="border-t border-gray-200 py-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentScreen === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start font-['Poppins'] font-medium ${
                      isActive 
                        ? "bg-[#27aae2] text-white hover:bg-[#2198ce]" 
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                    onClick={() => handleNavigation(item.id)}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                );
              })}
              <div className="pt-4 border-t border-gray-200">
                <div className="relative">
                  <Button
                    variant="outline"
                    className="w-full justify-start font-['Poppins']"
                    onClick={() => setMobileUserMenuOpen((v) => !v)}
                  >
                    <User className="w-4 h-4 mr-2" />
                    John Doe
                  </Button>
                  {mobileUserMenuOpen && (
                    <div className="absolute left-0 right-0 bg-white rounded-lg shadow-lg border w-full z-50 mt-2">
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 font-['Poppins'] text-sm"
                        onClick={() => { setMobileUserMenuOpen(false); handleNavigation('profile'); }}
                      >
                        Profile
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 font-['Poppins'] text-sm text-red-600"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};