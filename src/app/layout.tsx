import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";
import Spotlight from "@/components/spotlight";
import { siteMetadata } from "@/lib/data";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.author.name}`,
  },
  description: siteMetadata.description,
  authors: {
    name: siteMetadata.author.name,
    url: siteMetadata.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={clsx("scroll-smooth", inter.variable)}>
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <Providers>
          <Spotlight>
            <Header />
            {children}
          </Spotlight>
        </Providers>
      </body>
    </html>
  );
}
