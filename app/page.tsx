"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  GraduationCap,
  Award,
  Code,
  Palette,
  Database,
  Globe,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-black">Mit Patel</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-600 hover:text-black transition-colors py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left text-gray-600 hover:text-black transition-colors py-2"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left text-gray-600 hover:text-black transition-colors py-2"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("education")}
                  className="text-left text-gray-600 hover:text-black transition-colors py-2"
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-600 hover:text-black transition-colors py-2"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Hi, I'm{" "}
                  <span className="underline decoration-4 decoration-black">
                    Mit S Patel
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                  AI/ML Enthusiast
                </p>
                <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto lg:mx-0">
                  Learning Deep Learning and Computational ML to create
                  impactful AI solutions. I’m driven by curiosity, clean code,
                  and solving real-world challenges with data.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                >
                  <a href="/MitPatel_Resume.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    My Resume
                  </a>
                </Button>
              </div>

              <div className="flex space-x-6 justify-center lg:justify-start">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-black rounded-full blur-3xl opacity-10"></div>
                <Image
                  src="/mit.jpeg?height=320&width=320&text=Your+Photo"
                  alt="Profile"
                  width={320}
                  height={320}
                  className="relative z-10 rounded-full border-4 border-black shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate developer with 5+ years of experience creating
              digital solutions that make a difference. I love turning complex
              problems into simple, beautiful designs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                With a background in both development and design, I bring a
                unique perspective to every project. I specialize in creating
                seamless user experiences backed by robust, scalable code.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing knowledge with
                the developer community.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div>
                  <h4 className="font-semibold text-black mb-2">Location</h4>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Gandhinagar, India
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">
                    Experience in AI/ML
                  </h4>
                  <p className="text-gray-600">1+ Years</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-black">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-black" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Projects Completed</span>
                    <span className="font-semibold">30+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Linkedin Connection</span>
                    <span className="font-semibold">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Experience</span>
                    <span className="font-semibold">1+</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Some of my recent work that I'm proud of
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-black">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Project+1"
                  alt="Project 1"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-black hover:bg-gray-100"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-black hover:bg-gray-100"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>E-Commerce Platform</CardTitle>
                <CardDescription>
                  A full-featured e-commerce solution with payment integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-black text-black">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Stripe
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-black">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Project+2"
                  alt="Project 2"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-black hover:bg-gray-100"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-black hover:bg-gray-100"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Task Management App</CardTitle>
                <CardDescription>
                  A collaborative project management tool with real-time updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-black text-black">
                    Vue.js
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Express
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Socket.io
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    PostgreSQL
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-black sm:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Project+3"
                  alt="Project 3"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-black hover:bg-gray-100"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-black hover:bg-gray-100"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Weather Dashboard</CardTitle>
                <CardDescription>
                  A beautiful weather app with location-based forecasts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-black text-black">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Tailwind
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    API
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              The tools and technologies I work with
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-black" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    React
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Vue.js
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Next.js
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    TypeScript
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    JavaScript
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    HTML5
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    CSS3
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Tailwind CSS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-black" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Node.js
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Express
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Python
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Django
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    PostgreSQL
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    MongoDB
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Redis
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    GraphQL
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-black" />
                  DevOps & Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Docker
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    AWS
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Vercel
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Git
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    GitHub Actions
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Jest
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Cypress
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Webpack
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="w-5 h-5 mr-2 text-black" />
                  Design
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Figma
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Adobe XD
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Photoshop
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Illustrator
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    UI/UX Design
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Prototyping
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Wireframing
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Education & Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="border-black">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-black" />
                      Bachelor's in Computer Science
                    </CardTitle>
                    <CardDescription className="mt-2">
                      University Name
                    </CardDescription>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-black text-white self-start"
                  >
                    2015 - 2019
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Graduated with honors. Specialized in software engineering and
                  web development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-black" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>AWS Certified Developer</span>
                  <Badge variant="outline" className="border-black text-black">
                    2023
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Google Cloud Professional</span>
                  <Badge variant="outline" className="border-black text-black">
                    2022
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>React Developer Certification</span>
                  <Badge variant="outline" className="border-black text-black">
                    2021
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Email</p>
                      <p className="text-gray-600">your.email@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Location</p>
                      <p className="text-gray-600">Your City, Country</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6">
                <Link
                  href="#"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <Card className="border-black">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-black hover:bg-gray-800 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <Separator className="mb-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                © 2025 Mit S Patel. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
