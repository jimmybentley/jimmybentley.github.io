import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Bentley | Software Engineer",
  description: "Software Engineer specializing in Distributed Systems and Machine Learning Infrastructure",
  keywords: ["Software Engineer", "Machine Learning", "Distributed Systems", "Cloud Infrastructure"],
  authors: [{ name: "James Bentley" }],
  openGraph: {
    title: "James Bentley | Software Engineer",
    description: "Software Engineer specializing in Distributed Systems and Machine Learning Infrastructure",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
