import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Container from "@/components/container";
import Spotlight from "@/components/spotlight";
import { siteMetadata } from "@/lib/data";
import "./globals.css";

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
        <Spotlight>
          <Container>{children}</Container>
        </Spotlight>
      </body>
    </html>
  );
}
