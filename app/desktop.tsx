"use client";

import type { NextPage } from "next";
import Image from "next/image";
import Why from "../components/why";
import Tokenomics from "../components/tokenomics";
import SwapModule from "../components/SwapModule";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const Desktop: NextPage = () => {
  return (
    <div className="w-full min-h-screen relative bg-gradient-to-b from-[#a2025c] via-[#1b8bad] to-[#363637] overflow-hidden opacity-99 leading-normal tracking-normal text-left text-base text-miscellaneous-floating-tab-pill-fill font-montserrat">
      {/* Sección Why */}
      <section className="relative z-10">
        <Why />
      </section>

      {/* Sección Tokenomics */}
      <section className="relative z-10">
        <Tokenomics />
      </section>

      {/* Módulo de Swap */}
      <section className="relative z-20 flex justify-center items-center py-20">
        <SwapModule />
      </section>

     

      {/* Sección adicional según el diseño de Figma */}
      <section className="relative z-10">
        <FrameComponent />
      </section>

      {/* Pie de página */}
      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Desktop;
