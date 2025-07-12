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

// Custom striped logo component - creates a vibrant, colorful P logo
const StripedLogo: React.FC = () => {
  const colors = [
    '#FF6B6B', // Vibrant red
    '#4ECDC4', // Fresh teal
    '#45B7D1', // Ocean blue
    '#96CEB4', // Mint green
    '#FFEAA7', // Warm yellow
    '#DDA0DD', // Soft plum
    '#98D8C8', // Seafoam green
    '#F7DC6F', // Golden yellow
    '#BB8FCE', // Lavender purple
    '#85C1E9'  // Sky blue
  ];

  return (
    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 overflow-hidden relative">
      {/* Background with stripes */}
      <div className="absolute inset-0 flex flex-col">
        {colors.map((color, index) => (
          <div
            key={index}
            className="flex-1"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      {/* Letter P overlay */}
      <span className="text-white font-bold text-lg relative z-10 drop-shadow-lg">
        P
      </span>
    </div>
  );
};

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
              <StripedLogo />
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
              <StripedLogo />
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