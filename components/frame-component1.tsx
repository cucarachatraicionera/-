"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import SwapButton from "../components/SwapButton";

export type FrameComponent1Type = {
    className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
    return (
        <section className={`w-full flex justify-center items-center p-4 ${className}`}>
            <div className="w-[400px] md:w-[480px] rounded-3xl bg-gradient-to-br from-[#1e1e1e] to-[#292929] p-6 shadow-xl border border-[#5ee7ff3a] text-white space-y-4">
                {/* From Section */}
                <div className="bg-black rounded-xl p-4 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-white/50">from</p>
                        <h2 className="text-3xl font-bold">2,194</h2>
                    </div>
                    <button className="flex items-center gap-2 border border-[#64cdff] rounded-full px-4 py-1">
                        <Image src="/solana.png" alt="SOL" width={20} height={20} />
                        <span className="text-[#64cdff] font-medium">SOL</span>
                    </button>
                </div>

                {/* Swap icon */}
                <div className="flex justify-center">
                    <div className="bg-[#64cdff] p-2 rounded-full">
                        <FaArrowDown className="text-black" />
                    </div>
                </div>

                {/* To Section */}
                <div className="bg-black rounded-xl p-4 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-white/50">to</p>
                        <h2 className="text-3xl font-bold">12,466</h2>
                    </div>
                    <button className="flex items-center gap-2 border border-[#64cdff] rounded-full px-4 py-1">
                        <Image src="/chihuahua.png" alt="Pinky" width={20} height={20} />
                        <span className="text-[#64cdff] font-medium">Pinky Promise</span>
                    </button>
                </div>

                {/* Info Section */}
                <div className="bg-black rounded-xl p-4 text-sm text-white/70 space-y-2">
                    <p><strong>2,194 SOL</strong> = <strong>12,466 PINKY PROMISE</strong></p>
                    <div className="flex justify-between">
                        <span>Minimum Received</span>
                        <span className="text-white font-bold">10 PINKY PROMISE</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Price Impact</span>
                        <span>-</span>
                    </div>
                </div>

                {/* Swap Button */}
                <SwapButton recipient="B281iQS8fnYczAyQR5U9j3hNyMYaiNbGkwM3z9AwG8Pk" amount={0.01} />
            </div>
        </section>
    );
};

export default FrameComponent1;
