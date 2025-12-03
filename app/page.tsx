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
  Briefcase,
  Users,
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
                  Completed coursework in Machine Learning; currently advancing
                  knowledge in Deep Learning.
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
                  <a
                    href="/Mit Soneshbhai Patel.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    My Resume
                  </a>
                </Button>
              </div>

              <div className="flex space-x-6 justify-center lg:justify-start">
                <Link
                  href="https://github.com/mitpatel3008"
                  className="text-gray-600 hover:text-black transition-colors"
                  target="_blank"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mit-patel-ab3177320/"
                  className="text-gray-600 hover:text-black transition-colors"
                  target="_blank"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link
                  href="mailto:mitpatel3008@gmail.com"
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
                  src="/profile.jpg"
                  alt="Mit Patel profile photo"
                  width={320}
                  height={320}
                  className="relative z-10 rounded-full border-4 border-black shadow-2xl object-cover"
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
              I’m passionate about building intelligent systems and solving
              real-world problems. I write clean, efficient code and
              continuously grow my skills in AI and software development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                With a foundation in computer science from Pandit Deendayal
                Energy University, I explore how AI can power smarter, adaptive
                systems through hands-on learning and real-world projects.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                When I’m not coding, you’ll find me exploring the latest in deep
                learning, contributing to open-source communities, or learning
                from real-world innovations that inspire me to think bigger and
                build better.
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
                    Roadmap
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span> • Transformers & Attention Mechanisms</span>
                    <span className="font-semibold"></span>
                  </div>
                  <div className="flex justify-between">
                    <span> • Large Language Models (LLMs)</span>
                    <span className="font-semibold"></span>
                  </div>
                  <div className="flex justify-between">
                    <span> • GenAI Applications using LangChain & OpenAI</span>
                    <span className="font-semibold"></span>
                  </div>
                  <div className="flex justify-between">
                    <span> • FastAPI & Deployment Workflows</span>
                    <span className="font-semibold"></span>
                  </div>
                  <div className="flex justify-between">
                    <span> • End-to-End AI Projects with Real-World Data</span>
                    <span className="font-semibold"></span>
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
                  src="/movie.jpg?height=200&width=400&text=Project+1"
                  alt="Project 1"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href="https://movierecommender-sys.streamlit.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-black hover:bg-gray-100"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a
                      href="https://github.com/mitpatel3008/MovieRecommender-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-black hover:bg-gray-100"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Moive Recommender System</CardTitle>
                <CardDescription>
                  Recommends similar movies using content-based filtering with a
                  Streamlit interface and TMDB poster API.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-black text-black">
                    TF-IDF
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    TMDB API
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Data Cleaning
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Poster Fetching
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Cosine Similarity
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Text Preprocessing
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Streamlit
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-black">
              <div className="relative overflow-hidden">
                <Image
                  src="/email.png?height=200&width=400&text=Project+2"
                  alt="Project 2"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href="https://spammail-classifier.streamlit.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-black hover:bg-gray-100"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>

                    <a
                      href="https://github.com/mitpatel3008/Spam-Mail-Prediction-Project?tab=readme-ov-file"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-black hover:bg-gray-100"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Spam-Mail Classifier</CardTitle>
                <CardDescription>
                  A machine learning web app that classifies emails as spam or
                  ham (genuine) using Natural Language Processing and Logistic
                  Regression.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-black text-black">
                    TfidfVectorizer
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Logistic Regression
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    NumPy
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Pandas
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Pickle
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    public SMS/email spam dataset
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Streamlit
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-black sm:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden">
                <Image
                  src="/churn.jpeg?height=200&width=400&text=Project+3"
                  alt="Project 3"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {/* <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-black hover:bg-gray-100"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button> */}
                    <a
                      href="https://github.com/mitpatel3008/CustomerChurnPrediction"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-black hover:bg-gray-100"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Customer Churn Prediction</CardTitle>
                <CardDescription>
                  Predicts customer churn using a TensorFlow model with cleaned
                  and prepared telco data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-black text-black">
                    TensorFlow
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Sequential Model
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Data Cleaning
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    MinMaxScaler
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Binary Classification
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Label Encoding
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Telco Dataset
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Self Assessment (Certification) Section */}
      <section
        id="self-assessment"
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Self Assessment
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-black shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-black" />
                  Certification
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Completed a comprehensive workshop on Power BI & Tableau
                  organized by the Society of Mathematics, gaining hands-on
                  experience in data visualization, dashboard creation, and
                  analytics.
                </p>

                <a
                  href="https://drive.google.com/file/d/1zSN1MI1oTZq_Vd7sCDyFO8KuMLVlRWVs/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-black hover:bg-gray-800 text-white">
                    Open Certificate
                  </Button>
                </a>
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
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2420/2420249.png"
                    alt="Languages Icon"
                    className="w-8 h-9 mr-2"
                  />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Python
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    C
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    C++
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Java
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    HTML
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    CSS
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    JavaScript
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    MySQL
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <img
                    src="https://www.shutterstock.com/image-vector/digital-technology-gear-icon-concept-600nw-1907618299.jpg"
                    alt="Python Libraries Icon"
                    className="w-8 h-9 mr-2"
                  />
                  Libraries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Numpy
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Pandas
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Matplolib
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Seaborn
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    scikit-learn
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    TensorFlow
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Tableau
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Power BI
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHIknnDmTFl3In08bcWIkGRHY0G83XZG9Ww&s"
                    alt="Python Libraries Icon"
                    className="w-7 h-6 mr-2"
                  />
                  AI/ML
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Machine Learning
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Deep Learning
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="w-7 h-7 mr-2 text-black" />
                  Creative Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Photoshop
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Illustrator
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    Premiere Pro
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    After Effects
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    After Effects
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">
                    CapCut
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
              Education
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
                      Pandit Deendayal Energy University
                    </CardDescription>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-black text-white self-start"
                  >
                    2023-2027
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Specializing in Artificial Intelligence and Data Science.
                </p>
              </CardContent>
            </Card>

            <Card className="border-black">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-black" />
                  Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>• 15+ AI/ML Projects Completed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Working under Prof. [Dr. Amitava Choudhary]</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• 500+ LinkedIn Connections</span>
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
                      <p className="text-gray-600">mit.p30082@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Phone</p>
                      <p className="text-gray-600">+91 9426691616</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Location</p>
                      <p className="text-gray-600">Gandhinagar, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6">
                <Link
                  href="https://github.com/mitpatel3008"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  target="_blank"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mit-patel-ab3177320/"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  target="_blank"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link
                  href="mailto:mitpatel3008@gmail.com"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <form
              action="https://formspree.io/f/xnnzgbro" // Replace with your Formspree endpoint
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="First Name" // Add the 'name' attribute
                    className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Mit"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="Last Name" // Add the 'name' attribute
                    className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Patel"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="_replyto" // Use '_replyto' to set the reply-to header
                  className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="mit.patel@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="_subject" // Use '_subject' to set the email subject
                  className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="Message" // Add the 'name' attribute
                  className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white"
              >
                Send Message
              </Button>
            </form>
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
                ©️ 2025 Mit S Patel. All rights reserved.
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
