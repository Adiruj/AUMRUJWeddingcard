import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import ScrollToTopButton from "@/components/ScrollToTopButton";
import { siteConfig } from "@/config/site";
import { Kanit } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Mobile_Navbar } from "@/components/mobile_nav";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const kanit = Kanit({
  subsets: ["thai"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "main/logo01.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          kanit.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col min-h-screen font-kanit">
            <main className="container mx-auto max-w-7xl flex-grow">
              {children}
              <ScrollToTopButton />
            </main>
            <div className="sm:hidden">
              <Mobile_Navbar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
