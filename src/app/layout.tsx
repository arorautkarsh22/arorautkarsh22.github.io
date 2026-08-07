import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utkarsh Arora — AI/ML Engineer & Full Stack Developer",
  description:
    "Portfolio of Utkarsh Arora — B.Tech AI/ML student specializing in machine learning, deep learning, and full-stack development. Experienced in TensorFlow, React, and building intelligent systems.",
  keywords: [
    "Utkarsh Arora",
    "AI Engineer",
    "ML Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Deep Learning",
    "React",
    "Python",
    "Portfolio",
  ],
  openGraph: {
    title: "Utkarsh Arora — AI/ML Engineer & Full Stack Developer",
    description:
      "Portfolio of Utkarsh Arora — building intelligent systems with AI/ML and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
