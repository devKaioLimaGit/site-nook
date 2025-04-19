"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Duração das animações
      easing: "ease-in-out", // Transição suave
      once: true, // Animação ocorre apenas uma vez
    });
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <section
          className="w-full max-w-7xl bg-white px-4 sm:px-6 lg:px-8 py-12 mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            className="flex flex-col lg:flex-row items-center justify-between mb-10 gap-8"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="w-full lg:w-1/2">
              <h1
                className="text-3xl font-semibold text-black sm:text-4xl mb-10"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Saiba mais sobre nós!
              </h1>
              <h3
                className="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                O que somos
              </h3>
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                EMPRESA DE SOLUÇÕES <br /> TECNOLÓGICAS
              </h2>
              <p
                className="text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                A NOOK desenvolve soluções tecnológicas que abordam desafios
                enfrentados por populações minoritárias, usando a inovação para
                promover inclusão e acessibilidade. Nossa proposta é oferecer
                ferramentas eficazes para melhorar processos e transformar a
                vida das pessoas, construindo um futuro onde a tecnologia serve
                ao bem social.
              </p>
            </div>
            <div
              className="w-full lg:w-1/2 flex justify-center"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <Image
                className="object-contain"
                src="/image/about/bonecocomnotebook.png"
                width={300}
                height={300}
                quality={100}
                alt="Foto de um boneco com um notebook"
                sizes="(max-width: 768px) 80vw, 400px"
              />
            </div>
          </div>

          <div
            className="flex flex-col lg:flex-row-reverse items-center justify-between mt-10 gap-8"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="w-full lg:w-1/2">
              <h3
                className="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                O que somos
              </h3>
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                NOOK
              </h2>
              <p
                className="text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Fundada a partir de um projeto integrador no Mediotec Senac, a
                NOOK é uma startup que coloca a tecnologia a serviço da inclusão
                e da transformação social. Nosso propósito é identificar
                necessidades reais e desenvolver soluções tecnológicas
                adaptáveis para diferentes contextos, desde a educação até o
                varejo. Com três aplicações principais – OBI, VUPT! EXPRESS e
                GYM SHOP –, nosso objetivo é melhorar a vida de usuários e
                promover impacto positivo.
              </p>
            </div>
            <div
              className="w-full lg:w-1/2 flex justify-center"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <Image
                className="object-contain"
                src="/image/about/apertodemaos.png"
                width={300}
                height={300}
                quality={100}
                alt="Foto de um aperto de mãos"
                sizes="(max-width: 768px) 80vw, 400px"
              />
            </div>
          </div>
        </section>

        <section
          className="w-full max-w-7xl bg-white px-4 sm:px-6 lg:px-8 py-12 mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1
            className="text-3xl font-semibold text-black sm:text-4xl mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Equipe <span className="text-[#103ADA] font-medium">NOOK</span>
          </h1>
          <div
            className="w-full flex flex-col justify-center items-start mb-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div
                className="relative flex flex-col items-center text-center group"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <Image
                  src="/image/about/carrasco.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de Erick Carrasco"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
                <div className="mt-2">
                  <h3 className="font-semibold text-base sm:text-lg">
                    Erick Carrasco
                  </h3>
                  <span className="text-gray-600 text-sm sm:text-base">
                    CEO
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 shadow-lg rounded-lg p-4 flex flex-col items-center justify-center">
                  <p className="text-sm text-gray-700 mb-4">
                    Erick lidera a NOOK com visão estratégica, focando em inovação e impacto social.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com/in/erickcarrasco" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Erick Carrasco">
                      <FaLinkedin className="text-[#103ADA] text-xl hover:text-[#0A66C2] transition-colors" />
                    </a>
                    {/* <a href="https://github.com/erickcarrasco" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Erick Carrasco">
                      <FaGithub className="text-[#103ADA] text-xl hover:text-[#24292e] transition-colors" />
                    </a>
                    <a href="https://instagram.com/erickcarrasco" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Erick Carrasco">
                      <FaInstagramSquare className="text-[#103ADA] text-xl hover:text-[#E4405F] transition-colors" />
                    </a> */}
                  </div>
                </div>
              </div>
              <div
                className="relative flex flex-col items-center text-center group"
                data-aos="zoom-in"
                data-aos-delay="450"
              >
                <Image
                  src="/image/about/ruan.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de Ruan Guedes"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
                <div className="mt-2">
                  <h3 className="font-semibold text-base sm:text-lg">
                    Ruan Guedes
                  </h3>
                  <span className="text-gray-600 text-sm sm:text-base">
                    COO
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 shadow-lg rounded-lg p-4 flex flex-col items-center justify-center">
                  <p className="text-sm text-gray-700 mb-4">
                    Ruan gerencia operações, garantindo eficiência e alinhamento com os objetivos da NOOK.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com/in/ruanguedes" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Ruan Guedes">
                      <FaLinkedin className="text-[#103ADA] text-xl hover:text-[#0A66C2] transition-colors" />
                    </a>
                    {/* <a href="https://github.com/ruanguedes" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Ruan Guedes">
                      <FaGithub className="text-[#103ADA] text-xl hover:text-[#24292e] transition-colors" />
                    </a>
                    <a href="https://instagram.com/ruanguedes" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Ruan Guedes">
                      <FaInstagramSquare className="text-[#103ADA] text-xl hover:text-[#E4405F] transition-colors" />
                    </a> */}
                  </div>
                </div>
              </div>
              <div
                className="relative flex flex-col items-center text-center group"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <Image
                  src="/image/about/italo.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de Ítalo Braz"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
                <div className="mt-2">
                  <h3 className="font-semibold text-base sm:text-lg">
                    Ítalo Braz
                  </h3>
                  <span className="text-gray-600 text-sm sm:text-base">
                    CTO
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 shadow-lg rounded-lg p-4 flex flex-col items-center justify-center">
                  <p className="text-sm text-gray-700 mb-4">
                    Ítalo lidera o desenvolvimento técnico, trazendo soluções inovadoras para os projetos.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com/in/italobraz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Ítalo Braz">
                      <FaLinkedin className="text-[#103ADA] text-xl hover:text-[#0A66C2] transition-colors" />
                    </a>
                    {/* <a href="https://github.com/italobraz" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Ítalo Braz">
                      <FaGithub className="text-[#103ADA] text-xl hover:text-[#24292e] transition-colors" />
                    </a>
                    <a href="https://instagram.com/italobraz" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Ítalo Braz">
                      <FaInstagramSquare className="text-[#103ADA] text-xl hover:text-[#E4405F] transition-colors" />
                    </a> */}
                  </div>
                </div>
              </div>
              <div
                className="relative flex flex-col items-center text-center group"
                data-aos="zoom-in"
                data-aos-delay="550"
              >
                <Image
                  src="/image/about/lucas.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de Lucas Vicente"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
                <div className="mt-2">
                  <h3 className="font-semibold text-base sm:text-lg">
                    Lucas Vicente
                  </h3>
                  <span className="text-gray-600 text-sm sm:text-base">
                    DEV
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 shadow-lg rounded-lg p-4 flex flex-col items-center justify-center">
                  <p className="text-sm text-gray-700 mb-4">
                    Lucas é um desenvolvedor dedicado, criando código robusto para as aplicações da NOOK.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com/in/lucasvicente" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Lucas Vicente">
                      <FaLinkedin className="text-[#103ADA] text-xl hover:text-[#0A66C2] transition-colors" />
                    </a>
                    {/* <a href="https://github.com/lucasvicente" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Lucas Vicente">
                      <FaGithub className="text-[#103ADA] text-xl hover:text-[#24292e] transition-colors" />
                    </a>
                    <a href="https://instagram.com/lucasvicente" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Lucas Vicente">
                      <FaInstagramSquare className="text-[#103ADA] text-xl hover:text-[#E4405F] transition-colors" />
                    </a> */}
                  </div>
                </div>
              </div>
              <div
                className="relative flex flex-col items-center text-center group"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <Image
                  src="/image/about/pedro.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de Pedro Caribé"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
                <div className="mt-2">
                  <h3 className="font-semibold text-base sm:text-lg">
                    Pedro Caribé
                  </h3>
                  <span className="text-gray-600 text-sm sm:text-base">
                    CDO
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 shadow-lg rounded-lg p-4 flex flex-col items-center justify-center">
                  <p className="text-sm text-gray-700 mb-4">
                    Pedro lidera o design, criando experiências visuais impactantes e acessíveis.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com/in/pedrocaribe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Pedro Caribé">
                      <FaLinkedin className="text-[#103ADA] text-xl hover:text-[#0A66C2] transition-colors" />
                    </a>
                    {/* <a href="https://github.com/pedrocaribe" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Pedro Caribé">
                      <FaGithub className="text-[#103ADA] text-xl hover:text-[#24292e] transition-colors" />
                    </a>
                    <a href="https://instagram.com/pedrocaribe" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Pedro Caribé">
                      <FaInstagramSquare className="text-[#103ADA] text-xl hover:text-[#E4405F] transition-colors" />
                    </a> */}
                  </div>
                </div>
              </div>
              <div
                className="relative flex flex-col items-center text-center group"
                data-aos="zoom-in"
                data-aos-delay="650"
              >
                <Image
                  src="/image/about/danton.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de Danton Prates"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
                <div className="mt-2">
                  <h3 className="font-semibold text-base sm:text-lg">
                    Danton Prates
                  </h3>
                  <span className="text-gray-600 text-sm sm:text-base">
                    Designer
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 shadow-lg rounded-lg p-4 flex flex-col items-center justify-center">
                  <p className="text-sm text-gray-700 mb-4">
                    Danton traz criatividade ao design, aprimorando a estética dos produtos NOOK.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com/in/dantonprates" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Danton Prates">
                      <FaLinkedin className="text-[#103ADA] text-xl hover:text-[#0A66C2] transition-colors" />
                    </a>
                    {/* <a href="https://github.com/dantonprates" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Danton Prates">
                      <FaGithub className="text-[#103ADA] text-xl hover:text-[#24292e] transition-colors" />
                    </a>
                    <a href="https://instagram.com/dantonprates" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Danton Prates">
                      <FaInstagramSquare className="text-[#103ADA] text-xl hover:text-[#E4405F] transition-colors" />
                    </a> */}
                  </div>
                </div>
              </div>
              <div
                className="relative flex flex-col items-center text-center group"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                <Image
                  src="/image/about/dandara.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de Dandara Gouveia"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
                <div className="mt-2">
                  <h3 className="font-semibold text-base sm:text-lg">
                    Dandara Gouveia
                  </h3>
                  <span className="text-gray-600 text-sm sm:text-base">
                    DBA
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 shadow-lg rounded-lg p-4 flex flex-col items-center justify-center">
                  <p className="text-sm text-gray-700 mb-4">
                    Dandara gerencia bancos de dados, garantindo segurança e performance.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com/in/dandaragouveia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Dandara Gouveia">
                      <FaLinkedin className="text-[#103ADA] text-xl hover:text-[#0A66C2] transition-colors" />
                    </a>
                    {/* <a href="https://github.com/dandaragouveia" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Dandara Gouveia">
                      <FaGithub className="text-[#103ADA] text-xl hover:text-[#24292e] transition-colors" />
                    </a>
                    <a href="https://instagram.com/dandaragouveia" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Dandara Gouveia">
                      <FaInstagramSquare className="text-[#103ADA] text-xl hover:text-[#E4405F] transition-colors" />
                    </a> */}
                  </div>
                </div>
              </div>
              <div
                className="relative flex flex-col items-center text-center group"
                data-aos="zoom-in"
                data-aos-delay="750"
              >
                <Image
                  src="/image/about/ivo.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de Ivo Leonardo"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
                <div className="mt-2">
                  <h3 className="font-semibold text-base sm:text-lg">
                    Ivo Leonardo
                  </h3>
                  <span className="text-gray-600 text-sm sm:text-base">
                    Mentor
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 shadow-lg rounded-lg p-4 flex flex-col items-center justify-center">
                  <p className="text-sm text-gray-700 mb-4">
                    Ivo orienta a equipe com sua experiência, impulsionando o crescimento da NOOK.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com/in/ivoleonardo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Ivo Leonardo">
                      <FaLinkedin className="text-[#103ADA] text-xl hover:text-[#0A66C2] transition-colors" />
                    </a>
                    {/* <a href="https://github.com/ivoleonardo" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Ivo Leonardo">
                      <FaGithub className="text-[#103ADA] text-xl hover:text-[#24292e] transition-colors" />
                    </a>
                    <a href="https://instagram.com/ivoleonardo" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Ivo Leonardo">
                      <FaInstagramSquare className="text-[#103ADA] text-xl hover:text-[#E4405F] transition-colors" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}