"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import SwapButton from "../components/SwapButton"; // 👈 aquí lo importas ya modularizado

export type FrameComponent1Type = {
    className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {

    return (
        <section
            className={`absolute top-[4282px] left-[92px] w-[1301px] h-[894px] flex flex-row items-start justify-start pt-0 px-0 pb-[172px] box-border max-w-full text-left text-base text-miscellaneous-floating-tab-pill-fill font-montserrat ${className}`}
        >
            {/* ✅ Tu layout Locofy intacto */}
            <div className="...">{/* Locofy Layout */}</div>

            {/* ✅ Aquí va tu SwapButton ya inteligente */}
            <SwapButton recipient="B281iQS8fnYczAyQR5U9j3hNyMYaiNbGkwM3z9AwG8Pk" amount={0.01} />

        </section>
    );
};

export default FrameComponent1;
