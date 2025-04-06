"use client";

import dynamic from "next/dynamic";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";

// Importa dinámicamente el botón para evitar errores en SSR (como en Vercel)
const WalletMultiButton = dynamic(
    async () =>
        (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
);

const Header = () => {
    const { connected, publicKey } = useWallet();

    return (
        <header className="w-full px-6 py-4 bg-black/90 flex justify-between items-center border-b border-white/10 shadow-md">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Image
                    src="/logo.png" // ✅ Coloca tu logo aquí (en /public/logo.png)
                    alt="PinkyPromise Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <h1 className="text-white font-bold text-xl">PinkyPromise</h1>
            </div>

            {/* Wallet status + button */}
            <div className="flex items-center gap-4">
                {connected && publicKey && (
                    <p className="text-sm text-cyan-300">
                        {publicKey.toBase58().slice(0, 4)}...
                        {publicKey.toBase58().slice(-4)}
                    </p>
                )}
                <WalletMultiButton />
            </div>
        </header>
    );
};

export default Header;
