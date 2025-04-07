"use client";

import type { NextPage } from "next";
import Image from "next/image";
import Why from "../components/why";
import Tokenomics from "../components/tokenomics";
import SwapModule from "../components/SwapModule";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import FrameComponent1 from "../components/frame-component1";

const Desktop: NextPage = () => {
  return (
    <div className="w-full min-h-screen relative bg-gradient-to-b from-[#a2025c] via-[#1b8bad] to-[#363637] overflow-hidden opacity-99 leading-normal tracking-normal text-left text-base text-miscellaneous-floating-tab-pill-fill font-montserrat">
      {/* Sección Why */}
     

      {/* Sección Tokenomics */}
      

      {/* Módulo de Swap */}
      <section className="relative z-20 flex justify-center items-center py-20">
        <SwapModule />
      </section>

      

     

     

      {/* Pie de página */}
      
    </div>
  );
};

export default Desktop;
