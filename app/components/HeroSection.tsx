'use client';

import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center dark:bg-gradient-to-b dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 light:bg-gradient-to-b light:from-white light:via-slate-50 light:to-slate-100 pt-20"
    >
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold dark:text-white light:text-slate-900 leading-tight">
                Hi, I'm <span className="gradient-text">Vishwa P</span>
              </h1>
              <p className="text-xl md:text-2xl dark:text-accent-400 light:text-accent-500 font-semibold">
                Software Development Engineer
              </p>
            </div>

            <p className="dark:text-dark-300 light:text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg">
              B.E CSE from <span className="dark:text-accent-400 light:text-accent-500 font-semibold">Chennai Institute of Technology</span>.
              Passionate about building <span className="dark:text-accent-400 light:text-accent-500">scalable applications</span>, solving 
              complex problems, and crafting delightful user experiences. Always eager to learn and grow.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 dark:bg-dark-800 dark:border-accent-500/30 light:bg-slate-100 light:border-accent-300/50 border rounded-lg">
                <span className="dark:text-dark-300 light:text-slate-600">💡</span> <span className="dark:text-accent-400 light:text-accent-500 font-semibold">Problem Solving</span>
              </div>
              <div className="px-4 py-2 dark:bg-dark-800 dark:border-accent-500/30 light:bg-slate-100 light:border-accent-300/50 border rounded-lg">
                <span className="dark:text-dark-300 light:text-slate-600">🚀</span> <span className="dark:text-accent-400 light:text-accent-500 font-semibold">Scalable Systems</span>
              </div>
              <div className="px-4 py-2 dark:bg-dark-800 dark:border-accent-500/30 light:bg-slate-100 light:border-accent-300/50 border rounded-lg">
                <span className="dark:text-dark-300 light:text-slate-600">🔧</span> <span className="dark:text-accent-400 light:text-accent-500 font-semibold">Full Stack</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="btn-primary inline-block text-center"
              >
                Get in Touch
              </a>
              <a
                href="/Resume.pdf"
                download
                className="btn-secondary inline-block text-center"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/vishwa-31"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/vishwa-p-cse-1aa504290"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:vishwap.cse2023@citchennai.net"
                className="dark:text-dark-400 dark:hover:text-accent-400 light:text-slate-600 light:hover:text-accent-500 transition-colors transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex items-center justify-center animate-slideUp">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Animated background circles */}
              <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-accent-500/20 dark:to-accent-600/20 light:bg-gradient-to-br light:from-accent-400/20 light:to-accent-500/20 rounded-full blur-3xl"></div>
              <div className="absolute inset-4 dark:bg-gradient-to-tr dark:from-accent-400/30 dark:to-transparent light:bg-gradient-to-tr light:from-accent-300/30 light:to-transparent rounded-full blur-2xl"></div>

              {/* Profile image container */}
              <div className="absolute inset-0 dark:bg-dark-800 light:bg-slate-200 rounded-2xl dark:border-accent-500/50 light:border-accent-300/50 border-2 flex items-center justify-center overflow-hidden group">
                <div className="w-full h-full dark:bg-gradient-to-br dark:from-dark-700 dark:to-dark-800 light:bg-gradient-to-br light:from-slate-100 light:to-slate-200 flex items-center justify-center">
                  <img
                    src="/profile image.jpeg"
                    alt="Vishwa P"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounceLite">
          <a href="#projects" className="dark:text-accent-400 dark:hover:text-accent-300 light:text-accent-500 light:hover:text-accent-400 transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
