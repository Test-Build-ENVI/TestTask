import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { Upload, Calendar, MapPin, Tag, Lightbulb, Shield, CheckCircle } from "lucide-react";

export const ElementPostProject = (): JSX.Element => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    location: "",
    deadline: "",
    skills: "",
  });

  // Tips data for the left panel
  const tipItems = [
    {
      title: "Be specific",
      description:
        "The more details, the better the quotes will match your needs.",
      icon: <Lightbulb className="w-3.5 h-3.5" />,
    },
    {
      title: "Timeline",
      description: "Include your preferred start date and project duration.",
      icon: <Calendar className="w-3.5 h-3.5" />,
    },
    {
      title: "Budget",
      description: "Provide a realistic budget range to attract suitable professionals.",
      icon: <Tag className="w-3.5 h-3.5" />,
    },
  ];

  // Benefits data for the blue card
  const benefits = [
    {
      text: "Reliable professionals",
      icon: <Shield className="w-3 h-3" />,
    },
    {
      text: "Quality guaranteed",
      icon: <CheckCircle className="w-3 h-3" />,
    },
    {
      text: "Free and without obligation",
      icon: <CheckCircle className="w-3 h-3" />,
    },
  ];

  const categories = [
    "Construction & Renovation",
    "Plumbing",
    "Electrical",
    "Painting",
    "Gardening & Landscaping",
    "Cleaning Services",
    "Moving Services",
    "IT & Technology",
    "Design & Creative",
    "Other"
  ];

  const locations = [
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e2f7ff] to-[#f0fbff]">
      {/* Header section */}
      <div className="w-full bg-gradient-to-r from-[#1f95c8] to-[#27aae2]">
        <div className="w-full h-20 bg-[#00b8de] shadow-lg">
          <div className="container mx-auto px-4 h-full flex items-center">
            <h1 className="text-white text-xl font-semibold font-['Poppins']">
              Post Your Project
            </h1>
          </div>
        </div>
        <div className="h-48 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Poppins']">
              Find the Perfect Professional
            </h2>
            <p className="text-lg opacity-90 font-['Poppins'] font-light">
              Describe your project and get quotes from qualified professionals
            </p>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          {/* Left column - Tips and benefits */}
          <div className="w-full lg:w-80 flex flex-col gap-5">
            {/* Tips card */}
            <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-[#effeff] rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-3.5 h-3.5 text-[#27aae2]" />
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-black text-sm">
                    Tips for your project
                  </h3>
                </div>

                <div className="space-y-4">
                  {tipItems.map((tip, index) => (
                    <div key={`tip-${index}`} className="flex gap-3">
                      <div className="w-6 h-6 bg-[#effeff] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="text-[#27aae2]">{tip.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-['Poppins'] font-semibold text-black text-sm mb-1">
                          {tip.title}
                        </h4>
                        {tip.description && (
                          <p className="font-['Poppins'] font-light text-gray-600 text-xs leading-relaxed">
                            {tip.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits card */}
            <Card className="bg-gradient-to-br from-[#2198ce] to-[#27aae2] text-white border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-white/20 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-sm">
                    Why choose our platform?
                  </h3>
                </div>

                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={`benefit-${index}`} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-white">{benefit.icon}</div>
                      </div>
                      <span className="font-['Poppins'] font-normal text-white text-sm">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column - Project details form */}
          <div className="flex-1">
            <Card className="border border-gray-200 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-white rounded-t-lg border-b border-gray-100 shadow-sm">
                <CardTitle className="font-['Poppins'] font-semibold text-base text-black">
                  Project Details
                </CardTitle>
                <CardDescription className="font-['Poppins'] font-light text-sm text-gray-600">
                  Fill in all the details to find the best matches.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 bg-white rounded-b-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Project title */}
                  <div className="space-y-2">
                    <label className="font-['Poppins'] font-medium text-sm text-black block">
                      Project title *
                    </label>
                    <Input
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="font-['Poppins'] font-light text-sm border-gray-300 focus:border-[#27aae2] focus:ring-[#27aae2]"
                      placeholder="For example, Complete bathroom renovation"
                      required
                    />
                  </div>

                  {/* Project description */}
                  <div className="space-y-2">
                    <label className="font-['Poppins'] font-medium text-sm text-black block">
                      Project description *
                    </label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="min-h-[80px] font-['Poppins'] font-light text-sm border-gray-300 focus:border-[#27aae2] focus:ring-[#27aae2] resize-none"
                      placeholder="Describe your project in detail. What needs to be done? Which materials? Specific requirements?"
                      required
                    />
                  </div>

                  {/* Categories and Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-['Poppins'] font-medium text-sm text-black block">
                        Category *
                      </label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="font-['Poppins'] font-light text-sm border-gray-300 focus:border-[#27aae2] focus:ring-[#27aae2]">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="font-['Poppins'] font-medium text-sm text-black block">
                        Budget ($) *
                      </label>
                      <div className="relative">
                        <Input
                          value={formData.budget}
                          onChange={(e) => handleInputChange("budget", e.target.value)}
                          className="font-['Poppins'] font-light text-sm border-gray-300 focus:border-[#27aae2] focus:ring-[#27aae2] pr-10"
                          placeholder="e.g. $2000-$3000"
                          required
                        />
                        <Tag className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Location and Deadline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-['Poppins'] font-medium text-sm text-black block">
                        Location *
                      </label>
                      <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
                        <SelectTrigger className="font-['Poppins'] font-light text-sm border-gray-300 focus:border-[#27aae2] focus:ring-[#27aae2]">
                          <SelectValue placeholder="For example, Amsterdam" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="font-['Poppins'] font-medium text-sm text-black block">
                        Deadline
                      </label>
                      <div className="relative">
                        <Input
                          type="date"
                          value={formData.deadline}
                          onChange={(e) => handleInputChange("deadline", e.target.value)}
                          className="font-['Poppins'] font-light text-sm border-gray-300 focus:border-[#27aae2] focus:ring-[#27aae2]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Skills/tags */}
                  <div className="space-y-2">
                    <label className="font-['Poppins'] font-medium text-sm text-black block">
                      Skills/tags
                    </label>
                    <Input
                      value={formData.skills}
                      onChange={(e) => handleInputChange("skills", e.target.value)}
                      className="font-['Poppins'] font-light text-sm border-gray-300 focus:border-[#27aae2] focus:ring-[#27aae2]"
                      placeholder="Add relevant skills or tags for your project"
                    />
                  </div>

                  {/* Project images */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-['Poppins'] font-semibold text-sm text-black mb-1">
                        Project images
                      </h4>
                      <p className="font-['Poppins'] font-light text-xs text-gray-600">
                        Upload images of your project (max 5 MB each)
                      </p>
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#27aae2] transition-colors cursor-pointer group">
                      <Upload className="w-8 h-8 text-gray-400 group-hover:text-[#27aae2] mx-auto mb-2 transition-colors" />
                      <p className="font-['Poppins'] font-light text-sm text-gray-600 group-hover:text-[#27aae2] transition-colors">
                        Click to upload images or drag and drop
                      </p>
                      <p className="font-['Poppins'] font-light text-xs text-gray-400 mt-1">
                        PNG, JPG, GIF up to 5MB
                      </p>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 font-['Poppins'] font-medium text-sm border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      Save as Draft
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 font-['Poppins'] font-medium text-sm bg-[#27aae2] hover:bg-[#2198ce] transition-colors"
                    >
                      Post Project
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};