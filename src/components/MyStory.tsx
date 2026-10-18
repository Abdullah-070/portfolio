import React from "react";
import {
  GraduationCap,
  Briefcase,
  Rocket,
  Code2,
  Heart,
  Star,
} from "lucide-react";

const MyStory = () => {
  const storyTimeline = [
    {
      year: "Jul - Aug 2026",
      title: "Full-Stack Intern - Sanestix",
      description:
        "Built the Python scraper engine for a multi-source lead-generation platform (Data Intelligence Platform) with Playwright, Selenium, and BeautifulSoup. Designed a standardized result schema, built a Redis BRPOP worker decoupling the engine from the Node.js backend, integrated MongoDB (PyMongo), and contributed to authentication, tenancy security, and secrets management.",
      icon: Code2,
      color: "from-orange-500 to-orange-600",
    },
    {
      year: "Jun - Aug 2026",
      title: "Volunteer Intern - Alkhidmat Foundation Pakistan",
      description:
        "Completed weekly disaster-response training (First Aid, basic life support, fire-fighting) and contributed to the GEN Z Entrepreneurship Initiative by surveying students, analyzing findings, and compiling a report. Received an Achievement Award for completing the Summer Internship Program 2026.",
      icon: Heart,
      color: "from-red-500 to-red-600",
    },
    {
      year: "Feb - Jun 2026",
      title: "Ambassador - LoopLab",
      description:
        "Represented LoopLab to support the growth of a tech-driven community centered on immersive virtual experiences through Loopverse 2.0. Led outreach campaigns and connected students with innovation-focused opportunities.",
      icon: Rocket,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "Feb - Jun 2026",
      title: "Volunteer - Fruitful Foundation",
      description:
        "Contributed to a youth-led social welfare chapter at COMSATS Lahore, organizing monthly fundraising campaigns including Iftar drives, Rashan distributions, orphanage visits, and a campus plantation drive.",
      icon: Heart,
      color: "from-red-500 to-red-600",
    },
    {
      year: "Feb 2026",
      title: "Python Intern - Umti Tech Solutions",
      description:
        "Completed a one-month remote internship focused on Python programming, developing efficient and scalable solutions for real-world development tasks and gaining hands-on experience in automation and backend technologies.",
      icon: Code2,
      color: "from-orange-500 to-orange-600",
    },
    {
      year: "Aug 2025",
      title: "Frontend Developer Intern - Elevvo Pathways",
      description:
        "Built the TaskFlow landing page with scroll animations and responsive layout achieving strong mobile performance. Implemented real-time form validation and dynamic blog features including search, filtering, and pagination.",
      icon: Rocket,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "Feb - May 2025",
      title: "SEO Intern - Mind Canvas",
      description:
        "Conducted keyword research and technical audits for 15+ target keywords. Contributed to measurable improvements in site performance metrics through comprehensive SEO strategy implementation.",
      icon: Briefcase,
      color: "from-green-500 to-green-600",
    },
    {
      year: "Jul - Aug 2024",
      title: "Python Developer Intern - Ilm O Irfan Technologies",
      description:
        "Completed structured Python training covering data structures and OOP. Delivered a Movie Recommendation System and a Hangman Game as internship projects.",
      icon: Code2,
      color: "from-orange-500 to-orange-600",
    },
    {
      year: "Feb 2024 - Present",
      title: "COMSATS University Islamabad",
      description:
        "BS Computer Science at COMSATS University Islamabad, Lahore Campus with a CGPA of 3.29/4.0. Relevant coursework: Data Structures & Algorithms, OOP, Database Systems, Web Technologies, AI, and Operating Systems.",
      icon: GraduationCap,
      color: "from-primary-light to-primary-600",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-300 rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            My Journey<span className="text-primary-600">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
            From passionate learner to professional developer, building scalable solutions with modern technologies and creating impactful digital experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-primary-dark transform lg:-translate-x-1/2"></div>

          <div className="space-y-12">
            {storyTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              // One card per item; on lg screens it alternates left/right of the centre line.
              const sideClasses = isEven
                ? "lg:col-start-1 lg:justify-self-end"
                : "lg:col-start-3 lg:justify-self-start";

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className="relative grid grid-cols-[4rem_1fr] lg:grid-cols-[1fr_4rem_1fr] items-center gap-x-8"
                  style={{ animationDelay: `${300 + index * 200}ms` }}
                >
                  {/* Timeline icon */}
                  <div className="relative z-10 col-start-1 row-start-1 lg:col-start-2 flex justify-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`col-start-2 row-start-1 ${sideClasses} w-full lg:max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up`}
                    style={{ animationDelay: `${300 + index * 200}ms` }}
                  >
                    <div
                      className={`inline-block bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}
                    >
                      {item.year}
                    </div>
                    <h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up delay-1000">
          <div className="bg-gradient-to-r from-primary-50 to-gray-50 rounded-2xl p-8 lg:p-12 border border-primary-100">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-primary-600 animate-pulse" />
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                Passion for Innovation
              </h3>
            </div>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Every project is an opportunity to learn, grow, and create
              something amazing.
              {` I'm`} excited to continue this journey and help bring your
              ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-primary-600 font-semibold">
                <Star className="w-5 h-5" />
                <span>Ready to create something amazing together?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
