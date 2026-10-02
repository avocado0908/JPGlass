import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "JP Glass Balustrades | Custom Glass Solutions",
  description: "Thoughtful glass balustrades, shower screens and custom glass solutions, professionally installed.",
  openGraph: { title: "JP Glass Balustrades | Custom Glass Solutions", description: "Thoughtful glass balustrades, shower screens and custom glass solutions, professionally installed.", type: "website", locale: "en_NZ" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col"><a href="#main-content" className="skip-link">Skip to content</a><Navbar />{children}<Footer /></body>
    </html>
  );
}
