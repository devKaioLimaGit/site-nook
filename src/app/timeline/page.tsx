"use client";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import historia01 from "../../../public/image/timeline/historia01.png";
import historia02 from "../../../public/image/timeline/historia02.png";
import incubadora from "../../../public/image/timeline/incubadora.png";
import podcast from "../../../public/image/timeline/podcast.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TimeLine() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <Header />
      <section
        className="overflow-hidden max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-x-20 gap-y-12"
        data-aos="fade-up"
      >
        {/* Nossa História */}
        <div className="flex flex-col space-y-6" data-aos="fade-right" data-aos-delay="100">
          <h2 className="text-3xl font-bold">Nossa história</h2>
          <p className="text-gray-700 leading-relaxed">
            A NOOK foi criada em agosto de 2023 no Mediotec Senac, originada de um projeto escolar com foco em inclusão.
            Iniciamos com a plataforma OBI, que rapidamente se destacou, e fomos convidados a participar do Early Stage
            do Sebrae, onde ficamos em 5º no Demoday. Desde então, participamos de eventos como Rec’n’Play e Campus Party e,
            em setembro de 2024, fomos oficialmente incubados pelo Senac, na i.d.e.i.a.S.
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-[400px]" data-aos="fade-up" data-aos-delay="200">
            <Image
              src={historia02}
              alt="Equipe NOOK no Mediotec"
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Principais Eventos */}
        <div className="flex flex-col space-y-6" data-aos="fade-left" data-aos-delay="100">
          <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-[400px]" data-aos="fade-up" data-aos-delay="200">
            <Image
              src={historia01}
              alt="Participação em evento"
              className="rounded-xl w-full h-auto"
            />
          </div>
          <h2 className="text-3xl font-bold mt-10">Principais Eventos</h2>
          <p className="text-gray-700 leading-relaxed">
            Participamos do Early Stage do Sebrae, onde conquistamos o 5º lugar no Demoday. Também marcamos presença nos
            eventos Rec’n’Play e Campus Party, voltados à tecnologia e inovação. No Porto Digital, nos engajamos em
            programas de apoio a startups tecnológicas. Fomos destaque no XX Congresso Internacional de Inovação na Educação,
            com uma entrevista à Globo (NETV), onde Erick Carrasco e André Silva discutiram o impacto das nossas soluções
            para a educação. Exploramos ainda novas possibilidades durante a Primeira Edição do Evento Web3 PE, abordando
            blockchain e inovação digital. Por fim, apresentamos nossas soluções na Feira do Empreendedor, voltada a
            empreendedores e investidores.
          </p>
        </div>
      </section>

      <section
        className="bg-[#0A0A13] text-white py-16 px-6 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Texto à esquerda */}
          <div data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-4xl font-semibold">
              A <span className="text-[#103ADA]">incubação</span>
            </h2>
            <p className="text-[#CFCFE2] mt-6 leading-relaxed">
              Nossa incubação pela <strong>i.de.i.a.S</strong> do Senac em setembro de 2024 foi um passo essencial para a NOOK. Durante esse período, recebemos mentoria e suporte para aperfeiçoar nossos produtos e fortalecer nossa presença no mercado. A experiência proporcionou acesso a recursos e conhecimentos que impulsionaram a NOOK a outro patamar no ecossistema de inovação.
            </p>
          </div>

          {/* Imagem à direita */}
          <div className="flex justify-center" data-aos="fade-left" data-aos-delay="300">
            <Image
              src={incubadora}
              alt="Logo da incubadora i.de.i.a.S"
              className="w-full max-w-[400px] h-auto"
            />
          </div>
        </div>
      </section>

      <section
        className="bg-[#ffff] text-white py-16 px-6 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Texto à esquerda */}
          <div data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-4xl font-semibold text-black">
              BYTES N' COFFEE
            </h2>
            <p className="text-black mt-6 leading-relaxed">
              Nosso podcast Bytes N' Coffee convida pessoas inspiradoras da tecnologia, incluindo desenvolvedores, empreendedores, gestores, fundadores de startups e professores. A cada episódio, abordamos os desafios e conquistas de quem vive e respira inovação, discutindo as principais tendências, histórias e aprendizados do universo tecnológico. Venha com a gente mergulhar nas conversas que conectam conhecimento e inspiração!
            </p>
          </div>

          {/* Imagem à direita */}
          <div className="flex justify-center" data-aos="fade-left" data-aos-delay="300">
            <Image
              src={podcast}
              alt="Logo da incubadora i.de.i.a.S"
              className="w-full max-w-[400px] h-auto"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}