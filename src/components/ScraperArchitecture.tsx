import React from "react";

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
  return (
    <figure className="mt-8 rounded-xl border border-primary-200 bg-primary-50/50 p-5 lg:p-6">
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
            <p className="text-sm text-gray-600 leading-relaxed">{step.note}</p>
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-primary-600 sm:hidden"
              >
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>

      <p className="mt-4 text-sm text-gray-600">
        Decoupling the Python engine from the Node.js backend through Redis and
        plain JSON lets each side evolve independently, with a shared API
        contract between them.
      </p>
    </figure>
  );
};

export default ScraperArchitecture;
