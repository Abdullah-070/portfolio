import React from "react";

type ProjectDetailsProps = {
  context?: string;
  problem?: string;
  built?: string;
  result?: string;
  technologies?: string[];
  description: string;
  maxTech?: number;
  compact?: boolean;
};

const rows = [
  { key: "problem", label: "Problem" },
  { key: "built", label: "Built" },
  { key: "result", label: "Result" },
] as const;

const ProjectDetails = ({
  context,
  problem,
  built,
  result,
  technologies = [],
  description,
  maxTech = 6,
  compact = false,
}: ProjectDetailsProps) => {
  const values = { problem, built, result };
  const hasStructure = Boolean(problem || built || result);

  return (
    <div className="space-y-4">
      {context && (
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
          {context}
        </p>
      )}

      {hasStructure ? (
        <dl className={`space-y-2 ${compact ? "text-sm" : "text-sm lg:text-base"}`}>
          {rows.map(({ key, label }) =>
            values[key] ? (
              <div key={key} className="flex gap-3">
                <dt className="w-16 flex-shrink-0 font-semibold text-gray-800">
                  {label}
                </dt>
                <dd className="text-gray-600 leading-relaxed">{values[key]}</dd>
              </div>
            ) : null
          )}
        </dl>
      ) : (
        <p
          className={`text-gray-600 leading-relaxed ${
            compact ? "text-sm line-clamp-3" : "text-sm lg:text-base"
          }`}
        >
          {description}
        </p>
      )}

      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, maxTech).map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
