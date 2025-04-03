"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { sendSol } from "../utils/solanaUtils";
import { useState } from "react";

type SwapButtonProps = {
    recipient: string; // ✅ Wallet destino
    amount: number;    // ✅ Monto en SOL
};

const SwapButton = ({ recipient, amount }: SwapButtonProps) => {
    const wallet = useWallet();
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [txHash, setTxHash] = useState<string | null>(null);

    const handleSwap = async () => {
        setStatusMessage(null);
        setTxHash(null);

        try {
            setIsLoading(true);

            // ✅ Auto-conectar si no está conectada
            if (!wallet.connected) {
                await wallet.connect();
            }

            if (!wallet.publicKey) {
                setStatusMessage("❌ Wallet no detectada.");
                return;
            }

            // ✅ Enviar SOL usando tu util
            const signature = await sendSol(wallet, recipient);

            if (signature) {
                setTxHash(signature);
                setStatusMessage("✅ Enviado correctamente.");
            } else {
                setStatusMessage("❌ Falló la transacción.");
            }

        } catch (error) {
            console.error("Error:", error);
            setStatusMessage("❌ Error durante el swap.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={handleSwap}
                disabled={isLoading}
                className="cursor-pointer [border:none] p-1 bg-deepskyblue self-stretch rounded-25xl flex flex-row items-center justify-center relative hover:bg-deepskyblue/80 transition"
            >
                <div className="flex flex-row items-center justify-center py-2.5 px-4 z-[0]">
                    <div className="relative text-base leading-[16px] font-montserrat text-dark-grey text-left">
                        {isLoading ? "Enviando..." : "Swap"}
                    </div>
                </div>
            </button>

            {statusMessage && (
                <div className="mt-2 text-center text-light-gray">{statusMessage}</div>
            )}
            {txHash && (
                <div className="mt-2 text-center text-deepskyblue">
                    Tx Hash: {txHash}
                </div>
            )}
        </>
    );
};

export default SwapButton;
