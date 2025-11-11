'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted immediately
    setIsMounted(true);
    
    // Get theme from localStorage or system preference
    try {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
      setTheme(initialTheme);
      applyTheme(initialTheme);
    } catch (e) {
      console.error('Theme initialization error:', e);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    try {
      const html = document.documentElement;
      
      // Remove both classes first
      html.classList.remove('light', 'dark');
      
      // Add the new theme class
      html.classList.add(newTheme);
      
      // Save to localStorage
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      console.error('Apply theme error:', e);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Always render with context value during hydration
  // The script in layout.tsx handles initial theme
  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  
  // Return safe defaults if context is not available
  // This prevents errors during hydration
  if (context === undefined) {
    return {
      theme: 'dark' as Theme,
      toggleTheme: () => {
        // Safe no-op during hydration
        if (typeof window !== 'undefined') {
          const html = document.documentElement;
          const newTheme = html.classList.contains('dark') ? 'light' : 'dark';
          html.classList.remove('light', 'dark');
          html.classList.add(newTheme);
          localStorage.setItem('theme', newTheme);
        }
      },
    };
  }
  
  return context;
}
