'use client';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Web Stack',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'TailwindCSS', 'Redux'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'VSCode', 'Docker', 'Postman', 'Figma'],
  },
  {
    title: 'CS Fundamentals',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'System Design', 'Problem Solving'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="dark:bg-dark-900 light:bg-white py-24">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="card animate-slideUp"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-xl font-bold dark:text-accent-400 light:text-accent-500 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="px-4 py-2 dark:bg-dark-700 dark:border-dark-600 dark:text-dark-100 light:bg-slate-100 light:border-slate-300 light:text-slate-800 border rounded-lg font-medium hover:border-accent-500 dark:hover:bg-dark-600 light:hover:bg-slate-50 transition-all duration-200 transform hover:scale-105 cursor-default"
                    style={{
                      animation: `slideUp 0.6s ease-out ${categoryIndex * 100 + skillIndex * 30}ms both`,
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Summary */}
        <div className="mt-16 dark:bg-gradient-to-r dark:from-accent-600/10 dark:to-accent-500/10 light:bg-gradient-to-r light:from-accent-400/5 light:to-accent-300/5 dark:border-accent-500/30 light:border-accent-300/30 border rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold dark:text-white light:text-slate-900 mb-4">Proficiency Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="dark:text-accent-400 light:text-accent-500 font-semibold mb-2">Frontend</p>
              <p className="dark:text-dark-300 light:text-slate-600">
                Expert in React, Next.js, and modern CSS frameworks with focus on responsive design and performance.
              </p>
            </div>
            <div>
              <p className="dark:text-accent-400 light:text-accent-500 font-semibold mb-2">Backend</p>
              <p className="dark:text-dark-300 light:text-slate-600">
                Proficient in Node.js, Express, and database management with expertise in REST APIs and data optimization.
              </p>
            </div>
            <div>
              <p className="dark:text-accent-400 light:text-accent-500 font-semibold mb-2">Problem Solving</p>
              <p className="dark:text-dark-300 light:text-slate-600">
                Strong foundation in DSA, algorithms, and system design with proven ability to optimize solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
