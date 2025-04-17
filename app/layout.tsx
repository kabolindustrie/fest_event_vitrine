import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FestiEvent",
  description: "Location de structures gonflables et animations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-indigo-50">
        {/* Conteneur logo + navbar */}
        <div className="relative w-full">
          {/* Logo centré au-dessus de la navbar */}
          <div className="fixed left-1/2 -translate-x-1/2 -top-0 z-200">
            <Link href="/" className="block transition hover:scale-105">
              <Image
                src="/images/festieventlogo.png"
                alt="Logo FestiEvent"
                width={120}
                height={120}
                className="rounded-full shadow-xl"
              />
            </Link>
          </div>

          {/* Navbar en dessous */}
          <Navbar />
        </div>

        {/* Contenu du site */}
        <main className="">{children}</main>
      </body>
    </html>
  );
}
