"use client";
import Image from "next/image";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import Link from "next/link";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { api } from "@/services/api";
import { ToastContainer, toast } from 'react-toastify';
import {redirect} from "next/navigation"

export default function Signup() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 800,
        easing: "ease-out",
        once: true,
      });
    });
  }, []);

  async function handlerRegister(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (name === "" || email === "" || password === "") {
      console.log("PREENCHA TODOS OS CAMPOS");
      return
    }

    try {
      await api.post("/users", {
        name,
        email,
        password
      });
      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
      toast.error("Erro ao cadastrar. Tente novamente.");
      console.log(error)
    }

    setTimeout(() => {
      redirect("/signin")
    }, 3000);

  }
  return (
    <>
      <ToastContainer />
      {/* Tela de Fundo com Imagem */}
      <section className="relative w-full h-screen bg-gray-900 overflow-x-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/home/pessoal.jpeg"
            alt="Grupo NOOK - Cadastre-se"
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
        <div className="absolute top-20 sm:top-24 md:top-28 left-0 right-0 flex flex-col justify-center items-center z-20 text-white px-4 sm:px-6 md:px-10 lg:px-16">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Crie sua{" "}
            <span className="relative inline-block">
              Conta
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent"></span>
            </span>
          </h1>
          <p
            className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-light tracking-wider opacity-90"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Junte-se à NOOK e comece a transformar o futuro
          </p>

          {/* Formulário visual */}
          <div
            className="mt-8 w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <form action={handlerRegister} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200"
                >
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
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-200"
                >
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Crie uma senha"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#103ADA] to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300/50"
              >
                Cadastrar
              </button>
            </form>

            <p
              className="mt-4 text-sm text-gray-300 text-center"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Já tem uma conta?{" "}
              <Link href="/signin" className="text-blue-400 hover:underline">
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
