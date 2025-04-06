import "./global.css";
import { ReactNode } from "react";
import "@solana/wallet-adapter-react-ui/styles.css"; // ✅ Importa los estilos de wallet
import WalletContextProvider from '../components/WalletContextProvider'
import Header from "../components/Header";

export const metadata = {
    title: `Untitled`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <WalletContextProvider> {/* ✅ Aquí envolvemos sin dañar */}
                <Header /> {/* ✅ Aquí va */}

                    {children}
                </WalletContextProvider>
            </body>
        </html>
    );
}
