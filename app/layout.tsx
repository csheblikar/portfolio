import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "./lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  authors: {
    name: siteMetadata.author,
    url: siteMetadata.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="scroll-smooth">
      <body className="bg-slate-900 font-sans leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
