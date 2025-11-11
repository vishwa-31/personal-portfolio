import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishwa P | Software Development Engineer",
  description: "Portfolio of Vishwa P - SDE specializing in full-stack development, scalable systems, and problem-solving. B.E CSE from Chennai Institute of Technology.",
  keywords: ["SDE", "Developer", "React", "Next.js", "Full Stack", "Portfolio", "Vishwa P"],
  authors: [{ name: "Vishwa P" }],
  openGraph: {
    title: "Vishwa P | Software Development Engineer",
    description: "Full-stack developer specializing in building scalable applications",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwa P | SDE",
    description: "Full-stack developer and problem solver",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (function() {
      try {
        const theme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = theme || (prefersDark ? 'dark' : 'light');
        document.documentElement.classList.add(initialTheme);
        document.documentElement.classList.remove(initialTheme === 'dark' ? 'light' : 'dark');
      } catch (e) {
        console.error('Theme initialization error:', e);
      }
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d0f12" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
