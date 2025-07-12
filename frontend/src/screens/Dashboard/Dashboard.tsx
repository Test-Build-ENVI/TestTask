import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { 
  BarChart3, 
  Users, 
  FolderOpen, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Star,
  MessageSquare,
  Plus,
  Filter,
  Search
} from "lucide-react";

interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalEarnings: number;
  averageRating: number;
  totalClients: number;
}

interface RecentProject {
  id: string;
  title: string;
  client: string;
  status: "active" | "completed" | "pending";
  budget: string;
  deadline: string;
  progress: number;
}

export const Dashboard = (): JSX.Element => {
  const [timeRange, setTimeRange] = useState("30");

  const stats: DashboardStats = {
    totalProjects: 24,
    activeProjects: 8,
    completedProjects: 16,
    totalEarnings: 45600,
    averageRating: 4.8,
    totalClients: 18
  };

  const recentProjects: RecentProject[] = [
    {
      id: "1",
      title: "Complete Bathroom Renovation",
      client: "Sarah Johnson",
      status: "active",
      budget: "$5,000",
      deadline: "2024-02-15",
      progress: 65
    },
    {
      id: "2",
      title: "Garden Landscaping Project",
      client: "Mike Chen",
      status: "completed",
      budget: "$3,500",
      deadline: "2024-01-20",
      progress: 100
    },
    {
      id: "3",
      title: "Kitchen Cabinet Installation",
      client: "Emma Wilson",
      status: "pending",
      budget: "$2,800",
      deadline: "2024-02-28",
      progress: 0
    },
    {
      id: "4",
      title: "Office Space Renovation",
      client: "Tech Solutions Inc",
      status: "active",
      budget: "$12,000",
      deadline: "2024-03-15",
      progress: 30
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "In Progress";
      case "completed":
        return "Completed";
      case "pending":
        return "Pending";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fbff] to-[#e2f7ff]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1f95c8] to-[#27aae2] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 font-['Poppins']">
                Dashboard
              </h1>
              <p className="text-lg opacity-90 font-['Poppins'] font-light">
                Welcome back! Here's your project overview
              </p>
            </div>
            <Button className="bg-white text-[#27aae2] hover:bg-gray-100 font-['Poppins'] font-medium">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 font-['Poppins']">Total Projects</p>
                  <p className="text-2xl font-bold text-gray-900 font-['Poppins']">{stats.totalProjects}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FolderOpen className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 font-['Poppins']">Active</p>
                  <p className="text-2xl font-bold text-gray-900 font-['Poppins']">{stats.activeProjects}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 font-['Poppins']">Completed</p>
                  <p className="text-2xl font-bold text-gray-900 font-['Poppins']">{stats.completedProjects}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 font-['Poppins']">Total Earnings</p>
                  <p className="text-2xl font-bold text-gray-900 font-['Poppins']">${stats.totalEarnings.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 font-['Poppins']">Avg Rating</p>
                  <p className="text-2xl font-bold text-gray-900 font-['Poppins']">{stats.averageRating}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 font-['Poppins']">Total Clients</p>
                  <p className="text-2xl font-bold text-gray-900 font-['Poppins']">{stats.totalClients}</p>
                </div>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-['Poppins'] font-semibold text-lg">
                    Recent Projects
                  </CardTitle>
                  <Button variant="outline" size="sm" className="font-['Poppins']">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {recentProjects.map((project, index) => (
                    <div
                      key={project.id}
                      className={`p-6 ${index !== recentProjects.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50 transition-colors`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 font-['Poppins'] mb-1">
                            {project.title}
                          </h4>
                          <p className="text-sm text-gray-600 font-['Poppins']">
                            Client: {project.client}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium font-['Poppins'] ${getStatusColor(project.status)}`}>
                          {getStatusText(project.status)}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-4">
                          <span className="font-['Poppins']">Budget: {project.budget}</span>
                          <span className="flex items-center gap-1 font-['Poppins']">
                            <Calendar className="w-4 h-4" />
                            {project.deadline}
                          </span>
                        </div>
                      </div>

                      {project.status === "active" && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-['Poppins'] text-gray-600">Progress</span>
                            <span className="font-['Poppins'] font-medium">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-[#27aae2] h-2 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Messages */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-['Poppins'] font-semibold text-lg">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-[#27aae2] hover:bg-[#2198ce] font-['Poppins']">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Project
                </Button>
                <Button variant="outline" className="w-full justify-start font-['Poppins']">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Projects
                </Button>
                <Button variant="outline" className="w-full justify-start font-['Poppins']">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  View Messages
                </Button>
                <Button variant="outline" className="w-full justify-start font-['Poppins']">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Recent Messages */}
            <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-['Poppins'] font-semibold text-lg">
                  Recent Messages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-[#27aae2] rounded-full flex items-center justify-center text-white text-sm font-medium">
                      S
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 font-['Poppins']">Sarah Johnson</p>
                      <p className="text-xs text-gray-600 font-['Poppins'] truncate">
                        Thanks for the update on the bathroom project...
                      </p>
                      <p className="text-xs text-gray-400 font-['Poppins'] mt-1">2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      M
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 font-['Poppins']">Mike Chen</p>
                      <p className="text-xs text-gray-600 font-['Poppins'] truncate">
                        The garden looks amazing! Here's the final payment...
                      </p>
                      <p className="text-xs text-gray-400 font-['Poppins'] mt-1">1 day ago</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full font-['Poppins'] text-sm">
                  View All Messages
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};