'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  accomplishments: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'SAIL (Salem Steel Plant)',
    position: 'Intern - Computer & Information Technology',
    duration: 'May 2025 - July 2025',
    description:
      'Developed and deployed a comprehensive reporting dashboard that automated data collection and visualization for facility operations. Managed multiple databases and improved reporting efficiency across departments.',
    accomplishments: [
      'Built a real-time reporting dashboard reducing manual reporting time by 70%',
      'Automated 50+ daily reports using Python scripts and scheduled tasks',
      'Managed and optimized 5+ databases containing operational data',
      'Improved data accuracy by implementing automated validation checks',
      'Trained 15+ staff members on the new dashboard system',
      'Reduced infrastructure monitoring costs by 40% through automation',
    ],
    technologies: ['Python', 'SQL', 'Excel VBA', 'Data Visualization', 'Database Management'],
  },
];

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="dark:bg-dark-800 light:bg-slate-100 py-24">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Building impactful solutions and driving results
          </p>
        </div>

        {/* Experience Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="card animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                className="w-full text-left flex items-start justify-between gap-4 focus:outline-none"
              >
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold dark:text-white light:text-slate-900 group-hover:text-accent-400 transition-colors">
                      {exp.position}
                    </h3>
                    <span className="text-sm dark:text-accent-500 light:text-accent-600 font-semibold md:text-right">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="dark:text-accent-400 light:text-accent-500 font-semibold">{exp.company}</p>
                </div>
                <div
                  className={`dark:text-accent-400 light:text-accent-500 transition-transform duration-300 flex-shrink-0 ${
                    expanded === exp.id ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronDown size={24} />
                </div>
              </button>

              {/* Expanded Content */}
              {expanded === exp.id && (
                <div className="mt-6 pt-6 dark:border-dark-700 light:border-slate-300 border-t space-y-4 animate-slideUp">
                  <p className="dark:text-dark-300 light:text-slate-600 leading-relaxed">{exp.description}</p>

                  {/* Accomplishments */}
                  <div>
                    <h4 className="dark:text-accent-400 light:text-accent-500 font-semibold mb-3">Key Accomplishments:</h4>
                    <ul className="space-y-2">
                      {exp.accomplishments.map((acc, idx) => (
                        <li key={idx} className="flex gap-3 dark:text-dark-300 light:text-slate-600">
                          <span className="dark:text-accent-500 light:text-accent-600 font-bold flex-shrink-0">✓</span>
                          <span>{acc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="dark:text-accent-400 light:text-accent-500 font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 dark:bg-dark-700 dark:text-accent-300 dark:border-dark-600 light:bg-slate-200 light:text-accent-600 light:border-slate-300 rounded-full border text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 dark:bg-dark-700 dark:border-dark-600 light:bg-slate-200 light:border-slate-300 rounded-lg p-6 border">
          <h3 className="text-lg font-bold dark:text-white light:text-slate-900 mb-4">Education</h3>
          <div className="space-y-4">
            <div>
              <p className="dark:text-accent-400 light:text-accent-500 font-semibold">Bachelor of Engineering (B.E) - Computer Science & Engineering</p>
              <p className="dark:text-dark-300 light:text-slate-600">Chennai Institute of Technology (CIT)</p>
              <p className="text-sm dark:text-dark-400 light:text-slate-500 mt-1">Graduated: 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
