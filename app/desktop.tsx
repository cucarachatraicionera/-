"use client";

import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const Desktop: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-[#a2025c] via-[#1b8bad] to-[#363637] font-montserrat text-miscellaneous-floating-tab-pill-fill">
      
      {/* Sección Swap */}
      <div className="relative z-10 py-24 px-4">
        <FrameComponent1 />
      </div>

      {/* Sección Informativa */}
      <div className="relative z-10 py-24 px-4">
        <FrameComponent />
      </div>

      {/* Espacio para separar visualmente */}
      <div className="h-24 w-full" />

      {/* Footer */}
      <footer className="relative z-10 w-full bg-black text-white py-60 px-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Desktop;
