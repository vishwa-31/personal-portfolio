'use client';

import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset success message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        const errorData = await response.json();
        alert(`Error sending email: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="dark:bg-dark-800 light:bg-slate-100 py-24">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slideUp">
            <div>
              <h3 className="text-2xl font-bold dark:text-white light:text-slate-900 mb-8">Contact Information</h3>
              <p className="dark:text-dark-300 light:text-slate-600 mb-8">
                I'm always open to discussing new projects, opportunities, or just having a chat. Feel free to reach out!
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:vishwap.cse2023@citchennai.net"
                className="flex gap-4 p-4 rounded-lg dark:hover:bg-dark-700 light:hover:bg-slate-200 transition-colors group"
              >
                <div className="dark:text-accent-400 light:text-accent-500 flex-shrink-0 pt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="dark:text-dark-300 light:text-slate-600 text-sm font-semibold">Email</p>
                  <p className="dark:text-white light:text-slate-900 group-hover:dark:text-accent-400 group-hover:light:text-accent-500 transition-colors">
                    vishwap.cse2023@citchennai.net
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919361753461"
                className="flex gap-4 p-4 rounded-lg dark:hover:bg-dark-700 light:hover:bg-slate-200 transition-colors group"
              >
                <div className="dark:text-accent-400 light:text-accent-500 flex-shrink-0 pt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="dark:text-dark-300 light:text-slate-600 text-sm font-semibold">Phone</p>
                  <p className="dark:text-white light:text-slate-900 group-hover:dark:text-accent-400 group-hover:light:text-accent-500 transition-colors">
                    +91 9361753461
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex gap-4 p-4 rounded-lg">
                <div className="dark:text-accent-400 light:text-accent-500 flex-shrink-0 pt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="dark:text-dark-300 light:text-slate-600 text-sm font-semibold">Location</p>
                  <p className="dark:text-white light:text-slate-900">Chennai, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 dark:border-dark-700 light:border-slate-300 border-t">
              <p className="dark:text-dark-300 light:text-slate-600 text-sm font-semibold mb-4">Follow Me</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/vishwa-31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2 dark:bg-dark-700 dark:hover:bg-dark-600 light:bg-slate-200 light:hover:bg-slate-300 rounded-lg dark:text-accent-400 dark:hover:text-accent-300 light:text-accent-600 light:hover:text-accent-500 transition-colors"
                >
                  <Github size={20} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/vishwa-p-cse-1aa504290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2 dark:bg-dark-700 dark:hover:bg-dark-600 light:bg-slate-200 light:hover:bg-slate-300 rounded-lg dark:text-accent-400 dark:hover:text-accent-300 light:text-accent-600 light:hover:text-accent-500 transition-colors"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slideUp" style={{ animationDelay: '100ms' }}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 dark:bg-dark-700 light:bg-white dark:border-dark-600 light:border-slate-300 rounded-lg border"
            >
              {/* Success Message */}
              {submitted && (
                <div className="p-4 dark:bg-accent-500/20 light:bg-accent-100 dark:border-accent-500/50 light:border-accent-300/50 border rounded-lg dark:text-accent-400 light:text-accent-600 flex items-center gap-2">
                  <span className="text-lg">✓</span>
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block dark:text-dark-300 light:text-slate-600 text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 dark:bg-dark-800 dark:border-dark-600 light:bg-slate-50 light:border-slate-300 border rounded-lg dark:text-white light:text-slate-900 dark:placeholder-dark-400 light:placeholder-slate-400 focus:outline-none focus:border-accent-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block dark:text-dark-300 light:text-slate-600 text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 dark:bg-dark-800 dark:border-dark-600 light:bg-slate-50 light:border-slate-300 border rounded-lg dark:text-white light:text-slate-900 dark:placeholder-dark-400 light:placeholder-slate-400 focus:outline-none focus:border-accent-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block dark:text-dark-300 light:text-slate-600 text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 dark:bg-dark-800 dark:border-dark-600 light:bg-slate-50 light:border-slate-300 border rounded-lg dark:text-white light:text-slate-900 dark:placeholder-dark-400 light:placeholder-slate-400 focus:outline-none focus:border-accent-500 transition-colors"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block dark:text-dark-300 light:text-slate-600 text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 dark:bg-dark-800 dark:border-dark-600 light:bg-slate-50 light:border-slate-300 border rounded-lg dark:text-white light:text-slate-900 dark:placeholder-dark-400 light:placeholder-slate-400 focus:outline-none focus:border-accent-500 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⟳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 dark:bg-gradient-to-r dark:from-accent-600/20 dark:to-accent-500/20 light:bg-gradient-to-r light:from-accent-400/10 light:to-accent-300/10 dark:border-accent-500/40 light:border-accent-300/40 border rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold dark:text-white light:text-slate-900 mb-3">Ready to work together?</h3>
          <p className="dark:text-dark-300 light:text-slate-600 mb-6">
            I'm actively looking for SDE opportunities. Let's connect and discuss how I can add value to your team!
          </p>
          <a href="mailto:vishwap.cse2023@citchennai.net" className="btn-primary">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
