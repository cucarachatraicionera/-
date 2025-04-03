import "./global.css";
import { ReactNode } from "react";
import "@solana/wallet-adapter-react-ui/styles.css"; // ✅ Importa los estilos de wallet
import WalletContextProvider from '../components/WalletContextProvider'
export const metadata = {
    title: `Untitled`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <WalletContextProvider> {/* ✅ Aquí envolvemos sin dañar */}
                    {children}
                </WalletContextProvider>
            </body>
        </html>
    );
}
