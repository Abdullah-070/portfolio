import Link from "next/link";
import React from "react";
import { Calendar, MapPin, ExternalLink, CheckCircle, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Muhammad Abdullah - Software Developer",
  description:
    "Explore the professional experience of Muhammad Abdullah, a software developer with expertise in frontend development, SEO, and Python programming.",
  keywords: ["Experience", "Work History", "Frontend Developer", "Internships", "Professional Journey"],
  robots: "index, follow",
};

const Experience = () => {
  return (
    <section className="py-20 relative overflow-hidden px-4 md:px-8 lg:px-28">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-primary-200 rounded-full opacity-30 animate-pulse delay-1000"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Experience<span className="text-primary-600">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
            My professional journey in web development, internships, and technical contributions. Currently focused on building scalable solutions with modern technologies.
          </p>
        </div>

        {/* Experience Card 1 - Python Developer (Most Recent) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-300 mb-8">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="lg:w-1/3">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary-600">
                      Umti Tech Solutions
                    </h3>
                    <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                      Python Developer Intern
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span className="font-medium">February 2026</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>Remote</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Automation", "Backend", "Scripts"].map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="lg:w-2/3">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                  Python Developer <span className="text-primary-600">@ Umti Tech Solutions</span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Developed Python automation scripts and backend utilities as part of a professional remote engineering team.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Worked on production-level Python development and system automation tasks in a collaborative remote environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Card 2 - Frontend Developer */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-400 mb-8">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="lg:w-1/3">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary-600">
                      Elevvo Pathways
                    </h3>
                    <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                      Frontend Developer Intern
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span className="font-medium">August 2025</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>Remote</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "JavaScript", "CSS", "HTML", "TailwindCSS"].map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="lg:w-2/3">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                  Frontend Developer <span className="text-primary-600">@ Elevvo Pathways</span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Built the TaskFlow landing page with scroll animations and responsive layout achieving strong mobile performance score.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Implemented real-time form validation and dynamic blog features including search, filtering, and pagination.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Contributed to page load improvements through JS/CSS optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Card 3 - SEO Intern */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-500 mb-8">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary-600">
                      Mind Canvas
                    </h3>
                    <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                      SEO Intern
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span className="font-medium">February - May 2025</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>Lahore, Pakistan</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">Skills Applied</h3>
                    <div className="flex flex-wrap gap-2">
                      {["SEO", "Keyword Research", "Technical Audit", "Analytics", "Optimization"].map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                  SEO Intern <span className="text-primary-600">@ Mind Canvas</span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Conducted keyword research and technical audits for 15+ target keywords.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Contributed to measurable improvements in site performance metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Card 4 - Python Developer (Ilm O Irfan) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-600">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary-600">
                      Ilm O Irfan Technologies
                    </h3>
                    <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                      Python Developer Intern
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span className="font-medium">July - August 2024</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>Lahore, Pakistan</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Data Structures", "OOP", "Libraries"].map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                  Python Developer <span className="text-primary-600">@ Ilm O Irfan Technologies</span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Completed structured Python training covering data structures and OOP.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Delivered a Movie Recommendation System and a Hangman Game as internship projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;