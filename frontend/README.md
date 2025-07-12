# ProjectHub - Frontend Application

Welcome! This is a React-based project management application with authentication and a beautiful UI.

## Features

### 🔐 Authentication System
- **Protected Routes**: All main application routes require authentication
- **Login/Register**: User authentication with token-based sessions
- **Auto-redirect**: Users are automatically redirected to login if not authenticated
- **Session Management**: Tokens stored in localStorage for persistent sessions

### 🎨 UI Enhancements
- **Striped Logo**: The ProjectHub logo features a vibrant "P" with 10 horizontal color stripes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and Shadcn UI components

### 📱 Application Screens
- **Dashboard**: Overview of projects and statistics
- **Project Listing**: Browse and search available projects
- **Post Project**: Create new project listings
- **User Profile**: Manage user settings and information

## Getting Started

> **Prerequisites:**
> The following steps require [NodeJS](https://nodejs.org/en/) to be installed on your system.

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to [http://localhost:5173](http://localhost:5173)

### Authentication Flow

1. **First Visit**: Users are automatically redirected to the login page
2. **Login/Register**: Users can create an account or log in with existing credentials
3. **Protected Access**: After authentication, users can access all application features
4. **Session Persistence**: Login state is maintained across browser sessions

## Development

### Project Structure
```
src/
├── components/
│   ├── Navigation/     # Navigation bar with striped logo
│   ├── ProtectedRoute/ # Authentication guard component
│   └── ui/            # Reusable UI components
├── screens/
│   ├── Auth/          # Login and Register screens
│   ├── Dashboard/     # Main dashboard
│   ├── ProjectListing/ # Project browsing
│   └── ElementPostProject/ # Project creation
└── api/               # API integration
```

### Key Components

- **ProtectedRoute**: Guards routes requiring authentication
- **StripedLogo**: Custom logo component with 10-color horizontal stripes
- **Navigation**: Main navigation with responsive design

## Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

