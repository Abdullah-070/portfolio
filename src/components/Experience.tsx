import Link from "next/link";
import React from "react";
import { Calendar, MapPin, CheckCircle, ArrowRight } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-primary-200 rounded-full opacity-30 animate-pulse delay-1000"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center lg:text-left mb-16">
          <h1 className="text-center text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Experience<span className="text-primary-600">.</span>
          </h1>
        <p className="text-center lg:text-center text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
            My professional journey in software development, internships, and technical contributions.
        </p>
        </div>

        {/* Experience Card 1 - Full-Stack Intern @ Sanestix (Most Recent) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-300 mb-8">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="lg:w-1/3">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary-600">
                      Sanestix
                    </h3>
                    <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                      Full-Stack Intern
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span className="font-medium">July 2026 - Present</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>Hybrid</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Playwright", "Selenium", "Redis", "MongoDB", "Node.js", "Jira"].map((tech) => (
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
                  Full-Stack Intern <span className="text-primary-600">@ Sanestix</span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Building the Python scraper engine for a multi-source lead-generation platform, developing modular scrapers with Playwright, Selenium, and BeautifulSoup.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Built a Redis-based worker that decouples the Python engine from the Node.js backend, and integrated MongoDB to track job status and persist results.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Applied project management practices and used Jira to track, prioritize, and resolve bugs and tickets throughout the sprint cycle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Card 2 - Volunteer Intern @ Alkhidmat Foundation */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-400 mb-8">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary-600">
                      Alkhidmat Foundation Pakistan
                    </h3>
                    <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                      Volunteer Intern
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span className="font-medium">July 2026 - Present</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>Hybrid, Lahore, Pakistan</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">Skills Applied</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Disaster Response", "First Aid", "Project Management", "Teamwork"].map((tech) => (
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
                  Volunteer Intern <span className="text-primary-600">@ Alkhidmat Foundation Pakistan</span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Completing structured weekly training in disaster response, including First Aid, BLS, fire-fighting, and water rescue orientation.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Executing the Water Harvesting community impact project, applying project management, teamwork, and community engagement skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Card 3 - Ambassador @ LoopLab */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-500 mb-8">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary-600">
                      LoopLab
                    </h3>
                    <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                      Ambassador
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span className="font-medium">February 2026 - June 2026</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>Lahore, Pakistan</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">Skills Applied</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Community Outreach", "Leadership", "Communication", "Strategy"].map((tech) => (
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
                  Ambassador <span className="text-primary-600">@ LoopLab</span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Selected to represent LoopLab and support the growth of a tech-driven community centered on immersive virtual experiences through Loopverse 2.0.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Led outreach campaigns, participated in strategy discussions, and connected students with innovation-focused opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Want to See My Complete Experience?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Explore my full experience timeline including all internships and professional development journey.
            </p>

            <Link
              href="/experience/"
              className="group inline-flex px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold transition-all duration-200 items-center gap-3"
            >
              View Complete Experience
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
