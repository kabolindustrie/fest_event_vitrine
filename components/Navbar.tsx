"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full px-6 py-4 bg-white shadow-sm z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Burger menu mobile */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation desktop */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black">
                Accueil
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-gray-600 hover:text-black bg-transparent">
                Catégories
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-md p-4 rounded-md min-w-[200px] text-left">
                <div className="flex flex-col gap-2">
                  <Link href="/categorie/chateau" className="text-sm text-gray-700 hover:bg-gray-100 rounded px-2 py-1">
                    Châteaux gonflables
                  </Link>
                  <Link href="/categorie/toboggan" className="text-sm text-gray-700 hover:bg-gray-100 rounded px-2 py-1">
                    Toboggans
                  </Link>
                  <Link href="/categorie/parcours" className="text-sm text-gray-700 hover:bg-gray-100 rounded px-2 py-1">
                    Parcours gonflables
                  </Link>
                  <Link href="/categorie/snack" className="text-sm text-gray-700 hover:bg-gray-100 rounded px-2 py-1">
                    Snacks
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-black">
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-6">
          <nav className="flex flex-col gap-4 text-gray-700">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-black">
              Accueil
            </Link>
            <Link href="/categorie/chateau" onClick={() => setMenuOpen(false)} className="hover:text-black">
              Châteaux gonflables
            </Link>
            <Link href="/categorie/toboggan" onClick={() => setMenuOpen(false)} className="hover:text-black">
              Toboggans
            </Link>
            <Link href="/categorie/parcours" onClick={() => setMenuOpen(false)} className="hover:text-black">
              Parcours gonflables
            </Link>
            <Link href="/categorie/snack" onClick={() => setMenuOpen(false)} className="hover:text-black">
              Snacks
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-black">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
