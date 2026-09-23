import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FitLogProvider } from "../context/FitLogContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "FitLog — Workout Library",
  description: "A dark, no-nonsense workout library and fitness planner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-[#0b0b0b] text-white">
        <FitLogProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster position="top-right" />
        </FitLogProvider>
      </body>
    </html>
  );
}