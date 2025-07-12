import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Search, MapPin, Calendar, DollarSign, User, Star, Filter } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  budget: string;
  location: string;
  deadline: string;
  category: string;
  postedBy: string;
  postedDate: string;
  proposals: number;
  rating: number;
  skills: string[];
}

export const ProjectListing = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const mockProjects: Project[] = [
    {
      id: "1",
      title: "Complete Bathroom Renovation",
      description: "Looking for a professional to completely renovate my bathroom. This includes tiling, plumbing, electrical work, and installation of new fixtures. The bathroom is approximately 8 square meters.",
      budget: "$5,000 - $8,000",
      location: "Amsterdam",
      deadline: "2024-02-15",
      category: "Construction & Renovation",
      postedBy: "Sarah Johnson",
      postedDate: "2024-01-10",
      proposals: 12,
      rating: 4.8,
      skills: ["Plumbing", "Tiling", "Electrical", "Construction"]
    },
    {
      id: "2",
      title: "Garden Landscaping Project",
      description: "Need a landscaper to redesign my backyard garden. Looking for someone who can create a modern design with sustainable plants and efficient irrigation system.",
      budget: "$3,000 - $5,000",
      location: "Rotterdam",
      deadline: "2024-03-01",
      category: "Gardening & Landscaping",
      postedBy: "Mike Chen",
      postedDate: "2024-01-08",
      proposals: 8,
      rating: 4.6,
      skills: ["Landscaping", "Garden Design", "Irrigation", "Plant Care"]
    },
    {
      id: "3",
      title: "Website Development for Small Business",
      description: "Looking for a web developer to create a modern, responsive website for my consulting business. Need e-commerce functionality and SEO optimization.",
      budget: "$2,000 - $4,000",
      location: "Utrecht",
      deadline: "2024-02-28",
      category: "IT & Technology",
      postedBy: "Emma Wilson",
      postedDate: "2024-01-05",
      proposals: 15,
      rating: 4.9,
      skills: ["Web Development", "React", "E-commerce", "SEO"]
    }
  ];

  const categories = [
    "All Categories",
    "Construction & Renovation",
    "Plumbing",
    "Electrical",
    "Painting",
    "Gardening & Landscaping",
    "Cleaning Services",
    "Moving Services",
    "IT & Technology",
    "Design & Creative"
  ];

  const locations = [
    "All Locations",
    "Amsterdam",
    "Rotterdam",
    "The Hague",
    "Utrecht",
    "Eindhoven",
    "Tilburg",
    "Groningen",
    "Almere",
    "Breda",
    "Nijmegen"
  ];

  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "All Categories" || project.category === selectedCategory;
    const matchesLocation = !selectedLocation || selectedLocation === "All Locations" || project.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fbff] to-[#e2f7ff]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1f95c8] to-[#27aae2] text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-['Poppins']">
            Find Your Next Project
          </h1>
          <p className="text-lg opacity-90 font-['Poppins'] font-light">
            Browse available projects and submit your proposals
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-6">
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search projects..."
                  className="pl-10 font-['Poppins'] text-sm"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="font-['Poppins'] text-sm">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Location Filter */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="font-['Poppins'] text-sm">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="font-['Poppins'] text-sm">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="budget-high">Highest Budget</SelectItem>
                  <SelectItem value="budget-low">Lowest Budget</SelectItem>
                  <SelectItem value="deadline">Deadline</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Project Listings */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="rounded-2xl shadow-lg border-0 bg-white/95 backdrop-blur-sm hover:shadow-xl transition-shadow flex flex-col overflow-hidden min-h-[480px]"
              style={{ maxWidth: 350 }}
            >
              {/* Image Placeholder */}
              <div className="bg-gray-300 w-full h-48" />
              <CardContent className="flex-1 flex flex-col p-6">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 font-['Poppins'] mb-1">
                  {project.title}
                </h3>
                {/* Description (truncate to 2 lines) */}
                <p className="text-gray-700 font-['Poppins'] text-sm font-normal leading-snug mb-4 line-clamp-2">
                  A small part of the project details: {project.description}
                </p>
                {/* Details List */}
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span className="font-['Poppins']">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-['Poppins']">{project.budget.replace('$', '€').replace(/,/g, '.')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span className="font-['Poppins']">{formatDate(project.deadline)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    <span className="font-['Poppins']">10:00 PM</span>
                  </div>
                </div>
                {/* Button */}
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full rounded-xl font-['Poppins'] font-semibold border-gray-300 text-gray-900 text-base py-2 hover:bg-gray-100"
                    onClick={() => handleViewProject(project)}
                  >
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="relative w-full max-w-5xl mx-4 my-8 bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row p-6 md:p-10 gap-8 overflow-y-auto max-h-[90vh]">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold z-10"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                ×
              </button>
              {/* Left: Image and thumbnails */}
              <div className="flex-1 min-w-[260px] flex flex-col items-center">
                <div className="w-full aspect-video bg-gray-300 rounded-xl mb-4 relative flex items-center justify-center">
                  {/* Carousel arrows and fullscreen icon (placeholders) */}
                  <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200/70 rounded-full w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-300"><span>&lt;</span></button>
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200/70 rounded-full w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-300"><span>&gt;</span></button>
                  <button className="absolute right-2 bottom-2 bg-gray-200/70 rounded-md w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-300"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m0 8v3a2 2 0 0 0 2 2h3m8-16h3a2 2 0 0 1 2 2v3m0 8v3a2 2 0 0 1-2 2h-3"/></svg></button>
                </div>
                <div className="flex gap-3 w-full justify-center mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-20 h-16 bg-gray-200 rounded-lg" />
                  ))}
                </div>
              </div>
              {/* Right: Details */}
              <div className="flex-1 min-w-[260px] flex flex-col">
                <span className="inline-block bg-[#27aae2]/10 text-[#27aae2] text-xs font-semibold rounded-full px-4 py-1 mb-3 w-fit">Renovate</span>
                <h2 className="text-2xl md:text-3xl font-bold font-['Poppins'] mb-2">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-6 mb-4 text-gray-700 text-sm">
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>{selectedProject.location}</span></div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>3rd December 2025</span></div>
                  <div className="flex items-center gap-2"><DollarSign className="w-4 h-4" /><span>{selectedProject.budget.replace('$', '€').replace(/,/g, '.')}</span></div>
                  <div className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg><span>10:00 PM</span></div>
                </div>
                <h3 className="text-lg font-semibold font-['Poppins'] mb-2 pt-24">Project Description</h3>
                <p className="text-gray-700 font-['Poppins'] text-sm mb-4">{selectedProject.description}</p>
                <ul className="list-disc pl-5 mb-4 space-y-1 text-[#27aae2]">
                  <li>Complete renovation of the kitchen with modern appliances</li>
                  <li>Bathroom renovation with luxury sanitary ware</li>
                  <li>Installation of solar panels and heat pump</li>
                  <li>Smart home system implementation</li>
                  <li>New flooring throughout the house</li>
                  <li>Painting work inside and outside</li>
                </ul>
                <h4 className="text-base font-semibold font-['Poppins'] mb-2 pt-8">Required Skills</h4>
                <div className="flex flex-wrap gap-2 pb-16">
                  {selectedProject.skills.map((skill, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-medium font-['Poppins']">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 font-['Poppins'] mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 font-['Poppins'] font-light">
                Try adjusting your search criteria or filters
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};