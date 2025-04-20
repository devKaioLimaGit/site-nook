"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // ícones de menu
import AOS from "aos";
import "aos/dist/aos.css"; // Importe o CSS do AOS

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Inicialize o AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Duração da animação em milissegundos
      once: true, // Anima apenas uma vez ao rolar
    });
  }, []);

  return (
    <header className="bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile: botão hambúrguer */}
        <button
          className="md:hidden mr-4"
          onClick={() => setMenuOpen(!menuOpen)}
          data-aos="fade-down" // Animação no botão de menu
          data-aos-delay="100"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0" data-aos="fade-right">
          <Image
            src={"/image/header/logoNook.png"}
            alt="Logo"
            width={160}
            height={80}
            className="h-10 md:h-16 w-auto"
          />
        </Link>

        {/* Navegação - Desktop */}
        <nav
          className="hidden md:flex space-x-10 text-lg md:text-xl font-light"
          data-aos="fade-left" // Animação na navegação
          data-aos-delay="200"
        >
          <Link
            href="/"
            className="hover:underline underline-offset-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Home
          </Link>
          <Link
            href="/news"
            className="hover:underline underline-offset-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            News
          </Link>
          <Link
            href="/aplication"
            className="hover:underline underline-offset-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Aplicações
          </Link>
          <Link
            href="/about"
            className="hover:underline underline-offset-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Sobre
          </Link>
          <Link
            href="/timeline"
            className="hover:underline underline-offset-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Timeline
          </Link>
          <Link
            href="/signin"
            className="hover:underline underline-offset-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Login
          </Link>
        </nav>
      </div>

      {/* Menu mobile (dropdown) */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 space-y-4 text-base"
          data-aos="fade-down" // Animação no menu mobile
          data-aos-delay="100"
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Home
          </Link>
          <Link
            href="/news"
            className="hover:underline underline-offset-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            News
          </Link>
          <Link
            href="/aplication"
            onClick={() => setMenuOpen(false)}
            className="block"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Aplicações
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Sobre
          </Link>
          <Link
            href="/timeline"
            onClick={() => setMenuOpen(false)}
            className="block"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Timeline
          </Link>
          <Link
            href="/signin"
            className="hover:underline underline-offset-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}