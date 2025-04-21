"use client";

import Image from "next/image";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";
import { api } from "@/services/api";
import Cookies from "js-cookie"; // <-- Aqui é o segredo!
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  async function handlerLogin(formData: FormData) {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
      toast.warn("Preencha todos os campos!");
      return;
    }

    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      const token = response.data?.token;

      if (!token) {
        toast.error("Erro: e-mail ou senha incorretos!");
        return;
      }

      // Armazenar o token como cookie no client
      Cookies.set("session", token, {
        expires: 30, // 30 dias
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      toast.success("Login realizado com sucesso!");

      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("Erro: e-mail ou senha incorretos!");
      console.error(error);
    }
  }

  return (
    <>
      <ToastContainer />
      {/* Tela com imagem de fundo */}
      <section className="relative w-full   h-[1000] bg-gray-900 overflow-x-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/home/pessoal.jpeg"
            alt="Grupo NOOK - Login"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={90}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 z-10"></div>
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-pulse-slow"></div>
        </div>

        {/* Header */}
        <header className="relative z-30 w-full">
          <Header />
        </header>

        {/* Conteúdo Principal */}
        <div className="absolute top-24 md:top-32 left-0 right-0 flex flex-col justify-center items-center z-20 text-white px-4 sm:px-6 md:px-10 lg:px-16">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Faça{" "}
            <span className="relative inline-block">
              Login
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent"></span>
            </span>
          </h1>
          <p
            className="mt-4 sm:mt-6 text-lg sm:text-xl font-light tracking-wider opacity-90"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Entre com sua conta NOOK e continue sua jornada
          </p>

          {/* Formulário visual */}
          <div
            className="mt-8 w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <form action={handlerLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Digite sua senha"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#103ADA] to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300/50"
              >
                Entrar
              </button>
            </form>

            <p
              className="mt-4 text-sm text-gray-300 text-center"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Ainda não tem uma conta?{" "}
              <Link href="/signup" className="text-blue-400 hover:underline">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
