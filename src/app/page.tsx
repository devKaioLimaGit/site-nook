"use client"
import Image from "next/image";
import Header from "./components/HeaderHome";
import Footer from "./components/Footer";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <>
      {/* Seção Hero */}
      <section className="relative w-full h-[1000] bg-gray-900 overflow-x-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/home/pessoal.jpeg"
            alt="Grupo NOOK - Conectados para construir o seu amanhã"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 z-10"></div>
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-pulse-slow"></div>
        </div>
        <header className="relative z-30 w-full">
          <Header />
        </header>
        <div className="absolute top-72 sm:top-52 md:top-40 left-0 right-0 flex flex-col justify-start items-center md:items-start z-20 text-white px-4 sm:px-6 md:px-10 lg:px-16">
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wider uppercase opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Conectados para
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mt-2 md:mt-4 max-w-4xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            CONSTRUIR O SEU{" "}
            <span className="relative inline-block">
              AMANHÃ!
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent"></span>
            </span>
          </h1>
          <p
            className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            NOOK
          </p>
          <Link href="/about">
            <button
              className="mt-6 sm:mt-8 px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-gray-900 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 hover:from-gray-100 hover:to-white focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="Saiba mais sobre a NOOK"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Descubra Agora
            </button>
          </Link>
        </div>
      </section>

      {/* Seção Inovação */}
      <section
        className="px-4 py-8 max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:px-8 sm:py-12 lg:grid-cols-2 lg:gap-12 items-center overflow-x-hidden"
        data-aos="fade-up"
      >
        <div className="order-1 lg:order-none">
          <h1
            className="text-3xl font-semibold text-black sm:text-4xl"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Pense em{" "}
            <span className="text-[#103ADA] font-medium">Inovação</span>
          </h1>
          <p
            className="mt-6 text-lg text-left text-black sm:mt-8 sm:text-xl md:text-2xl"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            A NOOK é uma startup de soluções tecnológicas <br />
            focada em promover inclusão e acessibilidade <br />
            para populações minoritárias. Nossos projetos <br />
            aplicam a tecnologia para transformar desafios <br />
            cotidianos em soluções inovadoras e acessíveis.
          </p>
        </div>
        <Image
          src="/image/home/ideia.png"
          alt="Grupo NOOK"
          width={300}
          height={300}
          className="order-2 mx-auto lg:ml-auto lg:mr-0"
          data-aos="fade-left"
          data-aos-delay="400"
        />
      </section>

      {/* Seção Quem Somos */}
      <section className="relative w-full bg-gray-900 text-white py-16 overflow-x-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/home/pessoal.jpeg"
            alt="Grupo NOOK"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full" data-aos="fade-right" data-aos-delay="200">
            <Image
              src="/image/home/pessoalpart2.png"
              alt="Grupo NOOK"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="300">
            <h2 className="text-3xl md:text-4xl font-bold">Quem somos</h2>
            <p className="text-lg">
              A NOOK é uma empresa de tecnologia focada na inclusão de jovens no
              mercado de trabalho, com o objetivo de impactar social para a
              melhoria a curto e longo prazo, promovendo o desenvolvimento em
              transformação profissional. Estamos conectados para construir
              talentos que impactam a sociedade da melhor forma.
            </p>
            <Link href="/about">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Saiba mais →
              </button>
            </Link>
          </div>
        </div>

        {/* Blocos de texto com maior espaçamento */}
        <div className="relative max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            className="space-y-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-semibold">Nosso time</h3>
            <p className="text-gray-300">
              O time da startup é formado por mentes inovadoras, com alta
              capacidade de adaptação e foco em resultados. Cada membro
              contribui com habilidades únicas, criando uma sinergia que
              impulsiona o crescimento.
            </p>
          </div>
          <div
            className="space-y-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 className="text-xl font-semibold">Nossa missão</h3>
            <p className="text-gray-300">
              Desenvolver soluções tecnológicas inovadoras que promovam a
              inclusão de jovens no mercado de trabalho, criando oportunidades
              de crescimento e impacto social positivo.
            </p>
          </div>
          <div
            className="space-y-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="text-xl font-semibold">Nossa visão</h3>
            <p className="text-gray-300">
              Ser referência em inovação social e tecnológica para a inclusão de
              jovens, promovendo comunidades mais conectadas e transformadoras.
            </p>
          </div>
        </div>

        <div
          className="relative max-w-6xl mx-auto px-4 mt-12 text-right"
          data-aos="fade-left"
          data-aos-delay="700"
        >
          <h3 className="text-xl font-semibold">Nossos valores</h3>
          <p className="text-gray-300">
            Inclusão, acessibilidade, inovação, compromisso social e
            transformação.
          </p>
        </div>
      </section>

      {/* Seção Principais Aplicações */}
      <section
        className="px-4 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-x-hidden"
        data-aos="fade-up"
      >
        <div>
          <h1
            className="text-4xl font-semibold text-black"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Principais{" "}
            <span className="text-[#103ADA] font-medium">Aplicações</span>
          </h1>
          <p
            className="mt-8 text-2xl text-left"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Nosso portfólio de inovações é focado em resolver problemas reais.
            Conheça nossas soluções
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 col-span-full mt-12 items-center justify-center">
          <div
            className="relative bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-2xl p-6 flex flex-col items-center transform transition-all duration-500 hover:shadow-2xl hover:from-blue-50 hover:to-white overflow-hidden w-full max-w-sm"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="/image/home/logoobi.png"
              alt="Logo OBI"
              width={150}
              height={75}
              className="relative z-10"
              data-aos="fade-up"
              data-aos-delay="500"
            />
            <h2
              className="mt-6 text-2xl font-bold text-gray-800"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              OBI
            </h2>
            <p
              className="mt-4 text-base text-gray-600 text-center leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Plataforma pedagógica inclusiva para alunos neurodivergentes.
            </p>
            <Link href="/aplication">
              <button
                className="relative mt-6 px-6 py-2 bg-gradient-to-r from-[#103ADA] to-blue-500 text-white font-semibold rounded-xl min-w-[180px] transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300/50 z-10"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Saiba Mais
              </button>
            </Link>
          </div>
          <div
            className="relative bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-2xl p-6 flex flex-col items-center transform transition-all duration-500 hover:shadow-2xl hover:from-blue-50 hover:to-white overflow-hidden w-full max-w-sm"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="/image/home/logovupt.png"
              alt="Logo VUPT! EXPRESS"
              width={150}
              height={75}
              className="body relative z-10"
              data-aos="fade-up"
              data-aos-delay="600"
            />
            <h2
              className="mt-6 text-2xl font-bold text-gray-800"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              VUPT! EXPRESS
            </h2>
            <p
              className="mt-4 text-base text-gray-600 text-center leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Otimização de compras e entregas para pequenos varejistas.
            </p>
            <Link href="/aplication">
              <button
                className="relative mt-6 px-6 py-2 bg-gradient-to-r from-[#103ADA] to-blue-500 text-white font-semibold rounded-xl min-w-[180px] transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300/50 z-10"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                Saiba Mais
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Parceiros */}
      <section
        className="px-4 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-x-hidden"
        data-aos="fade-up"
      >
        <h1
          className="text-3xl font-semibold text-black sm:text-4xl"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Nossos <span className="text-[#103ADA] font-medium">Parceiros</span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 col-span-full mt-12 items-center justify-around">
          <Image
            src="/image/home/logoideias.svg"
            alt="Logo Ideias"
            width={150}
            height={75}
            className="transform transition-transform duration-300 hover:scale-110"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
          <Image
            src="/image/home/logosenac.png"
            alt="Logo Senac"
            width={150}
            height={75}
            className="transform transition-transform duration-300 hover:scale-110"
            data-aos="zoom-in"
            data-aos-delay="400"
          />
          <Image
            src="/image/home/logo5up.png"
            alt="Logo 5up"
            width={150}
            height={75}
            className="transform transition-transform duration-300 hover:scale-110"
            data-aos="zoom-in"
            data-aos-delay="500"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}