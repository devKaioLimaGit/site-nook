"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // ícones de menu

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0A0A14] text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile: botão hambúrguer */}
        <button
          className="md:hidden mr-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo */}
        <Link href="/home" className="flex-shrink-0">
          <Image
            src={"/image/header/logoNook.png"}
            alt="Logo"
            width={160}
            height={80}
            className="h-10 md:h-16 w-auto"
          />
        </Link>

        {/* Navegação - Desktop */}
        <nav className="hidden md:flex space-x-10 text-lg md:text-xl font-light">
          <Link href="/" className="hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/news" className="hover:underline underline-offset-4">
            News
          </Link>
          <Link href="/aplication" className="hover:underline underline-offset-4">
            Aplicações
          </Link>
          <Link href="/about" className="hover:underline underline-offset-4">
            Sobre
          </Link>
          <Link href="/timeline" className="hover:underline underline-offset-4">
            Timeline
          </Link>
        </nav>
      </div>

      {/* Menu mobile (dropdown) */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-base">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block">
            Home
          </Link>
          <Link href="/news" onClick={() => setMenuOpen(false)} className="block">
            News
          </Link>
          <Link href="/aplication" onClick={() => setMenuOpen(false)} className="block">
            Aplicações
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block">
            Sobre
          </Link>
          <Link href="/timeline" onClick={() => setMenuOpen(false)} className="block">
            Timeline
          </Link>
        </div>
      )}
    </header>
  );
}
