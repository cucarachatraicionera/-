"use client";

import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const Desktop: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-[#a2025c] via-[#1b8bad] to-[#363637] font-montserrat text-miscellaneous-floating-tab-pill-fill">
      
      {/* Top Menu */}
      <header className="w-full bg-black text-white py-4 px-8 flex justify-between items-center shadow-md z-20 rounded-full">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-8 text-sm font-medium">
          <a href="/whitepaper" className="hover:text-[#64cdff] transition">Whitepaper</a>
          <a href="#swap" className="hover:text-[#64cdff] transition">Swap</a>
          <a href="#tokenomics" className="hover:text-[#64cdff] transition">Tokenomics</a>
          <a href="#roadmap" className="hover:text-[#64cdff] transition">Roadmap</a>
        </nav>

        {/* Buy Now Button */}
        <a
          href="/buy"
          className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-200 transition"
        >
          Buy Now
          <span className="material-icons">arrow_forward</span>
        </a>
      </header>

      {/* Swap Section */}
      <div className="relative z-10 py-24 px-4">
        <FrameComponent1 />
      </div>  

      {/* Informational Section */}
      <div className="relative z-10 py-24 px-4">
        <FrameComponent />
      </div>

      {/* Spacer */}
      <div className="h-24 w-full" />

      {/* Footer */}
      <footer className="relative z-10 w-full bg-black text-white py-60 px-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Desktop;
