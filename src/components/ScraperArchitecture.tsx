"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const steps = [
  {
    title: "Node.js backend",
    note: "Enqueues scrape jobs as plain JSON",
  },
  {
    title: "Redis queue",
    note: "Language-neutral hand-off; no BullMQ vs. Celery/RQ lock-in",
  },
  {
    title: "Python worker",
    note: "BRPOP queue consumer picks up each job",
  },
  {
    title: "Modular scrapers",
    note: "LinkedIn, Google Maps, Website, Facebook, Instagram (Playwright, Selenium, BeautifulSoup)",
  },
  {
    title: "Standard output envelope",
    note: "Per-scraper result schema with consistent, null-safe fields",
  },
  {
    title: "MongoDB (PyMongo)",
    note: "Tracks job status and persists scraped results",
  },
];

const ScraperArchitecture = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="scraper-architecture"
        className="inline-flex items-center gap-2 text-base font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-200"
      >
        Scraper Engine Architecture
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <figure
          id="scraper-architecture"
          className="mt-4 rounded-xl border border-primary-200 bg-primary-50/50 p-5 lg:p-6 animate-fade-in-up"
        >
          <figcaption className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-700">
            Scraper engine architecture (simplified)
          </figcaption>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h4 className="font-semibold text-gray-800">{step.title}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.note}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-4 text-sm text-gray-600">
            Decoupling the Python engine from the Node.js backend through Redis
            and plain JSON lets each side evolve independently, with a shared
            API contract between them.
          </p>
        </figure>
      )}
    </div>
  );
};

export default ScraperArchitecture;
