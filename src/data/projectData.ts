import techlifeblog from "../../public/assets/projects/tech-life-blog.png";
import billbuddy from "../../public/assets/projects/bill-buddy-ai.png";
import autocare from "../../public/assets/projects/auto-care-store.png";
import codeeditor from "../../public/assets/projects/online-code-editor.png";
import weatherapp from "../../public/assets/projects/weather-app.png";
import scholarshipfinder from "../../public/assets/projects/scholarship-finder.png";
import bankmanagement from "../../public/assets/projects/bank-management.jpg";
import movierecommendation from "../../public/assets/projects/movie-recommendation.jpg";
import employeepayroll from "../../public/assets/projects/employee-payroll.jpg";
import hangman from "../../public/assets/projects/hangman-game.jpg";
import erplite from "../../public/assets/projects/erp-lite.png";
import mobileaccessory from "../../public/assets/projects/mobile-accessories.png";

export const projectData = [
  {
    image: billbuddy,
    title: "Bill Buddy AI",
    description:
      "Developed an AI-powered financial companion built specifically for Pakistani households struggling with rising utility costs. At its core, it transforms confusing electricity, gas, and water bills into plain, actionable language, breaking down complex line items.",
    technologies: ["TypeScript", "Flask", "AI APIs"],
    context: "AI SEEKHO Hackathon \u00b7 Apr 2026",
    problem: "Electricity, gas, and water bills in Pakistan are hard to read, so households struggle to see where their costs come from.",
    built: "Parses a bill and explains each line item in plain Urdu or English, with cost-saving suggestions (TypeScript, Flask, AI APIs).",
    result: "Built for a hackathon and deployed live on Google Cloud Run.",
    status: "Completed",
    year: "2026",
    link: "https://billbuddy-ai-97323745133.asia-southeast1.run.app/",
    github: "https://github.com/Abdullah-070/billbuddy"
  },
  {
    image: autocare,
    title: "Auto Care Store",
    description:
      "A full-stack ecommerce platform for buying and selling auto spare parts (Dummy Products added) with JWT authentication, admin dashboard, and React frontend.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "JWT Authentication"],
    context: "Web Technologies semester project \u00b7 Jun 2026",
    problem: "Buying auto spare parts online needs a catalogue that is easy to search, filter, and order from.",
    built: "MERN e-commerce platform with an Express/Node REST API, MongoDB, JWT authentication, and a React frontend with a role-based admin dashboard.",
    result: "Search, filtering, cart, and order management work end to end; live demo on Vercel with dummy products.",
    status: "Completed",
    year: "2026",
    github: "https://github.com/Abdullah-070/auto-care-system",
    link: "https://auto-care-system-frontend.vercel.app/"
  },
  {
    image: weatherapp,
    title: "Weather App",
    description:
      "Built a responsive weather application providing real-time forecasts and detailed atmospheric information with a clean, intuitive user interface.",
    technologies: ["JavaScript", "API Integration", "UI/UX Design", "Responsive Design"],
    context: "Personal project \u00b7 2026",
    problem: "Checking a forecast should be quick, clear, and readable on any device.",
    built: "Responsive JavaScript app that pulls real-time forecast data and atmospheric details from a weather API.",
    result: "Live on Vercel with a clean, mobile-friendly interface.",
    status: "Completed",
    year: "2026",
    github: "https://github.com/Abdullah-070/weather-app",
    link: "https://weather-app-beta-opal-86.vercel.app/"
  },
  {
    image: codeeditor,
    title: "Online Code Editor",
    description:
      "A modern, feature-rich online code editor with split-screen interface for writing HTML, CSS, and JavaScript with live preview.",
    technologies: ["HTML", "CSS", "JavaScript"],
    context: "Personal project \u00b7 2026",
    problem: "Trying out HTML, CSS, and JavaScript snippets shouldn't need a local setup.",
    built: "Split-screen editor for HTML, CSS, and JavaScript with live preview.",
    result: "Live on Vercel, no installation needed.",
    status: "Completed",
    year: "2026",
    github: "https://github.com/Abdullah-070/online-code-editor",
    link: "https://online-code-editor-two-pi.vercel.app/"
  },
  {
    image: erplite,
    title: "Inventory-Invoicing-ERP-Lite",
    description:
      "A lightweight ERP for inventory management and invoicing, built with FastAPI, React, TypeScript, SQLite, and JWT authentication.",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "SQLite", "JWT Authentication"],
    context: "Personal project \u00b7 2026",
    problem: "Small businesses often track stock and invoices in separate places.",
    built: "Inventory and invoicing app with a Python FastAPI backend, React and TypeScript frontend, SQLite storage, and JWT authentication.",
    result: "Source code available on GitHub.",
    status: "Completed",
    year: "2026",
    github: "https://github.com/Abdullah-070/Inventory-Invoicing-ERP-Lite",
  },
  {
    image: mobileaccessory,
    title: "Mobile Accessory Hub - Inventory & POS System",
    description:
      "Developed a comprehensive database system for managing mobile accessories inventory with integrated Point of Sale functionality, featuring real-time stock tracking and automated sales processing.",
    technologies: ["Python", "PySide6", "SQL Server", "bcrypt"],
    context: "Database semester project \u00b7 2025",
    problem: "Accessory shops need stock levels and sales tracked in one reliable system.",
    built: "Python desktop POS with PySide6 and SQL Server, bcrypt-secured login, role-based access, and the Repository Pattern.",
    result: "Real-time stock tracking and automated sales reporting.",
    status: "Completed",
    year: "2025",
    github: "https://github.com/Abdullah-070/mobile-accessory-hub"
  },
  {
    image: scholarshipfinder,
    title: "AI Scholarship Finder",
    description:
      "Built an intelligent scholarship discovery platform aggregating 40+ opportunities from 10+ international databases with AI-powered matching algorithm that ranks scholarships based on user profile, featuring web scraping, data processing, and deployed on Streamlit Cloud.",
    technologies: ["Python", "Streamlit", "HuggingfaceHub", "Pandas", "Web Scraping"],
    context: "AI semester project \u00b7 2025",
    problem: "Scholarship opportunities are scattered across many sites and hard to match to a profile.",
    built: "Scrapes 10+ international databases, aggregates 40+ opportunities, and ranks them with a multi-factor match on country, degree, GPA, and funding type, with an analytics dashboard and Excel export.",
    result: "Live demo available.",
    status: "Completed",
    year: "2025",
    github: "https://github.com/Abdullah-070/scholarship-agent",
    link: "https://mabdullah070.pythonanywhere.com/"
  },
  {
    image: bankmanagement,
    title: "Bank Management System",
    description:
      "Created a robust banking application featuring account management, secure transaction processing, and customer data handling with file-based persistence and error handling mechanisms.",
    technologies: ["C++", "File I/O", "Data Structures", "Error Handling"],
    context: "DSA semester project \u00b7 2025",
    problem: "Apply core data structures to a realistic banking workflow.",
    built: "C++ console app using Stack, Queue, and Doubly Linked List for account management, transactions, and loan handling.",
    result: "File-based persistence keeps account data between runs.",
    status: "Completed",
    year: "2025",
    github: "https://github.com/Abdullah-070/bank-management-system"
  },
  {
    image: techlifeblog,
    title: "TechLife Blog",
    description:
      "Created a Personal Blog Homepage using HTML, CSS and JavaScript showing blog posts in card layout.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    year: "2025",
    github: "https://github.com/Abdullah-070/blog-homepage",
    link: "https://abdullah-070.github.io/blog-homepage/"
  },
  {
    image: movierecommendation,
    title: "Movie Recommendation System",
    description:
      "Designed an intelligent recommendation engine suggesting movies based on user preferences and viewing history using collaborative filtering and content-based algorithms in Python.",
    technologies: ["Python", "Data Analysis", "Algorithms"],
    status: "Completed",
    year: "2024",
    github: "https://github.com/Abdullah-070/movie-recommendation-system"
  },
  {
    image: employeepayroll,
    title: "Employee Payroll System",
    description:
      "Developed a payroll management system handling employee data, salary calculations, tax deductions, and automated payroll processing with comprehensive reporting features.",
    technologies: ["C", "File Management", "Algorithms"],
    status: "Completed",
    year: "2024",
    github: "https://github.com/Abdullah-070/employee-payroll-system"
  },
  {
    image: hangman,
    title: "Hangman Game",
    description:
      "Created an interactive word guessing game with clean user interface, engaging gameplay mechanics, difficulty levels, and secure tracking system for score management.",
    technologies: ["Python", "Game Logic", "Data Management"],
    status: "Completed",
    year: "2024",
    github: "https://github.com/Abdullah-070/hangman-game"
  },
  
];


