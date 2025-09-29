import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZED — Sleep Revolutionized",
  description: "Cozy • Whimsical • Elevated sleepwear and rituals",
  icons: {
    icon: "/bunny.png",
    shortcut: "/bunny.png",
    apple: "/bunny.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-6xl mx-auto px-6">
        <Header />
        <main className="mt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
