import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ScrollButtons from "@/components/ScrollingUpButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdullah | Software Developer Portfolio",
  icons: {
    icon: "/profile pic.jpg",
    apple: "/profile pic.jpg",
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
        <link rel="icon" href="/profile pic.jpg" type="image/x-icon" />
        <link rel="shortcut icon" href="/profile pic.jpg" type="image/x-icon" />
      </head>
      <body>
        <Header />
        <ScrollButtons />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}