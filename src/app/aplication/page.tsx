"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import obim01 from "../../../public/image/aplication/obi01.png";
import obi02 from "../../../public/image/aplication/obi02.png";
import vupt01 from "../../../public/image/aplication/vupt01.png";
import vupt02 from "../../../public/image/aplication/vupt02.png";
import metodologia from "../../../public/image/aplication/metodologia.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Aplication() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen px-4 sm:px-8 py-16 max-w-7xl mx-auto">
        {/* OBI Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Plataforma <span className="text-[#103ADA] font-extrabold">OBI</span>
            </h1>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              A Obi é uma aplicação desenvolvida para otimizar a comunicação e a gestão dentro de instituições de ensino. Ela atua como um elo entre alunos, professores e coordenação, facilitando o acesso a informações relevantes e promovendo uma comunicação mais ágil e eficiente. Por meio de uma interface simples e intuitiva, a Obi permite o envio de comunicados, o acompanhamento do desempenho dos alunos, a organização de turmas, registro de dados pedagógicos e muito mais.
            </p>
          </div>

          <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="300">
            <Image
              src={obim01}
              alt="Mockup da plataforma Obi"
              width={320}
              height={640}
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 col-span-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div
              className="flex justify-center lg:justify-start"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Image
                src={obi02}
                alt="Ilustração Obi"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="flex flex-col gap-6 text-gray-800">
              <div data-aos="fade-up" data-aos-delay="500">
                <h2 className="font-semibold text-2xl text-gray-900">O problema</h2>
                <p className="mt-3 text-gray-600">
                  Resolve a desorganização e a falta de integração entre alunos, professores e coordenação, que prejudica o acompanhamento pedagógico.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <h2 className="font-semibold text-2xl text-gray-900">A solução</h2>
                <p className="mt-3 text-gray-600">
                  Centraliza informações acadêmicas, comunicados, atividades e dados dos alunos em uma plataforma acessível e intuitiva.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vupt! Express Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Vupt! <span className="text-[#103ADA] font-extrabold">Express</span>
            </h1>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              A VUPT! EXPRESS é uma plataforma inovadora que resolve problemas enfrentados por pequenos varejistas, como mercadinhos, farmácias e pet shops, relacionados ao tempo de espera nas filas e à falta de integração no processo de compras. Focada em agilizar a entrega de produtos, ela otimiza pedidos e gerencia entregas de forma eficiente.
            </p>
          </div>

          <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="300">
            <Image
              src={vupt01}
              alt="Mockup da plataforma Vupt! Express"
              width={320}
              height={640}
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 col-span-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div
              className="flex justify-center lg:justify-start"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Image
                src={vupt02}
                alt="Ilustração Vupt! Express"
                width={400}
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="flex flex-col gap-6 text-gray-800">
              <div data-aos="fade-up" data-aos-delay="500">
                <h2 className="font-semibold text-2xl text-gray-900">O problema</h2>
                <p className="mt-3 text-gray-600">
                  Filas longas, falta de integração e automação, e erros em pedidos são desafios comuns para pequenos comerciantes e consumidores.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <h2 className="font-semibold text-2xl text-gray-900">A solução</h2>
                <p className="mt-3 text-gray-600">
                  Automatiza e simplifica o processo de compra e entrega, integrando comerciantes, sistemas de pagamento e logística para uma experiência rápida e sem erros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Metodologia Usada
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Utilizamos uma metodologia inovadora baseada em escuta ativa, prototipagem rápida e validação contínua com usuários finais. Colocamos alunos, professores e gestores no centro do processo, ouvindo suas dores e testando soluções em ciclos curtos. Combinamos design centrado no usuário com práticas ágeis, criando produtos funcionais, leves e alinhados às necessidades educacionais.
            </p>
          </div>

          <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="300">
            <Image
              src={metodologia}
              alt="Ilustração de metodologia"
              width={300}
              height={300}
              className="max-w-[300px] rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}