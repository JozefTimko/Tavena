import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Tavena",
  description: "We help creators build services audiences pay for.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Tavena",
    description: "We help creators build services audiences pay for.",
    siteName: "Tavena",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Tavena",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
