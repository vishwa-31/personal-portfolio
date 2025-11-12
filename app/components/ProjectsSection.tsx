'use client';

import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
  features: string[];
  timeframe: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'SaaS Dashboard',
    description: 'A comprehensive analytics dashboard for managing business metrics with real-time data visualization and automated reporting.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Chart.js'],
    link: '#',
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    features: ['Real-time Analytics', 'Export Reports', 'User Management', 'API Integration'],
    timeframe: 'Jan 2024 - Mar 2024',
  },
  {
    id: 2,
    title: 'Authentication System',
    description: 'Secure authentication system with JWT tokens, OAuth2 integration, and multi-factor authentication support.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt'],
    link: '#',
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80',
    features: ['JWT Auth', 'OAuth2', 'MFA', '2FA Support'],
    timeframe: 'Apr 2024 - May 2024',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with product catalog, shopping cart, payment integration, and order management.',
    tech: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Redux'],
    link: '#',
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=300&fit=crop',
    features: ['Product Catalog', 'Cart System', 'Payment Gateway', 'Order Tracking'],
    timeframe: 'Oct 2024 - Dec 2024',
  },
  {
    id: 4,
    title: 'Real-time Chat App',
    description: 'Chat application with real-time messaging, typing indicators, user status, and encrypted message support.',
    tech: ['React', 'WebSocket', 'Node.js', 'Firebase', 'Socket.io'],
    link: '#',
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=300&fit=crop',
    features: ['Real-time Messaging', 'Typing Indicators', 'User Status', 'Message History'],
    timeframe: 'Feb 2025 - Apr 2025',
  },
  {
    id: 5,
    title: 'AI Content Generator',
    description: 'ML-powered content generation tool with customizable templates, batch processing, and quality metrics.',
    tech: ['Python', 'FastAPI', 'OpenAI API', 'React', 'PostgreSQL'],
    link: '#',
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80',
    features: ['AI Templates', 'Batch Processing', 'Quality Metrics', 'Export Options'],
    timeframe: 'Oct 2025 - Nov 2025',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="dark:bg-dark-900 light:bg-slate-50 py-6">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcase of my recent work and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card group cursor-pointer animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 h-48 dark:bg-dark-700 light:bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-dark-900 dark:via-transparent dark:to-transparent light:bg-gradient-to-t light:from-black/20 light:via-transparent light:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold dark:text-white light:text-slate-900 group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm dark:text-accent-500 light:text-accent-600 font-semibold">{project.timeframe}</p>
                </div>

                <p className="dark:text-dark-300 light:text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-xs skill-badge">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 dark:bg-dark-700 dark:text-accent-300 dark:border-dark-600 light:bg-slate-100 light:text-accent-600 light:border-slate-300 rounded border group-hover:border-accent-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 dark:border-dark-700 light:border-slate-200 border-t">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 dark:text-accent-400 light:text-accent-500 hover:dark:text-accent-300 hover:light:text-accent-400 transition-colors text-sm font-semibold"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 dark:text-accent-400 light:text-accent-500 hover:dark:text-accent-300 hover:light:text-accent-400 transition-colors text-sm font-semibold ml-auto"
                    >
                      Live <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="dark:text-dark-300 light:text-slate-600 mb-4">Want to see more projects?</p>
          <a href="https://github.com/vishwa-31" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
