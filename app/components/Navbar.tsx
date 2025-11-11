'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-opacity-95 backdrop-blur-sm border-b z-50 dark:bg-dark-900 dark:border-dark-700 light:bg-white light:border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold gradient-text hover:text-accent-400 transition-colors"
          >
            VP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="dark:text-dark-300 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Links */}
            <a
              href="https://github.com/vishwa-31"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishwa-p-cse-1aa504290"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg dark:bg-dark-800 dark:hover:bg-dark-700 light:bg-slate-100 light:hover:bg-slate-200 transition-colors"
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-accent-400" />
              ) : (
                <Moon size={20} className="text-accent-500" />
              )}
            </button>

            <a
              href="#contact"
              className="btn-primary text-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu & Controls */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg dark:bg-dark-800 dark:hover:bg-dark-700 light:bg-slate-100 light:hover:bg-slate-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-accent-400" />
              ) : (
                <Moon size={20} className="text-accent-500" />
              )}
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="dark:text-accent-400 dark:hover:text-accent-300 light:text-accent-500 light:hover:text-accent-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t dark:border-dark-700 light:border-slate-200 animate-slideUp">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="block px-4 py-3 dark:text-dark-300 dark:hover:text-accent-400 dark:hover:bg-dark-800 light:text-slate-600 light:hover:text-accent-500 light:hover:bg-slate-100 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Social Links */}
            <div className="px-4 py-3 border-t dark:border-dark-700 light:border-slate-200 flex gap-4">
              <a
                href="https://github.com/vishwa-31"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vishwa-p-cse-1aa504290"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <div className="px-4 py-3">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="btn-primary w-full text-center block"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
