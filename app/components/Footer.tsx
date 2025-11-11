'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="dark:bg-dark-900 dark:border-dark-700 light:bg-white light:border-slate-200 border-t py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">VP</h3>
            <p className="dark:text-dark-400 light:text-slate-600">
              Software Development Engineer passionate about building scalable applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="dark:text-white light:text-slate-900 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="dark:text-white light:text-slate-900 font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/vishwa-31"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vishwa-p-cse-1aa504290"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:vishwap.cse2023@citchennai.net"
                className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="dark:border-dark-700 light:border-slate-200 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="dark:text-dark-400 light:text-slate-600 text-sm">
            © 2024 Vishwa P. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 dark:text-accent-400 dark:hover:text-accent-300 light:text-accent-500 light:hover:text-accent-400 transition-colors group"
          >
            Back to Top
            <ArrowUp size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
