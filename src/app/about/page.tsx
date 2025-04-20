"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Smooth transition
      once: true, // Animation occurs only once
    });
  }, []);
  interface UserProps {
    id: string
    name: string
    role: string
    image: string
    description: string
    linkedin: string,
  }
  // State to track which team member's description is visible
  const [activeMember, setActiveMember] = useState<string | null>(null);


  // Toggle description visibility on click
  const toggleDescription = (memberId: string) => {
    setActiveMember(activeMember === memberId ? null : memberId);
  };
  
  // Team members data
  const teamMembers = [
    {
      id: "erick",
      name: "Erick Carrasco",
      role: "CEO",
      image: "/image/about/carrasco.png",
      description:
        "Erick lidera a NOOK com visão estratégica, focando em inovação e impacto social.",
      linkedin: "https://linkedin.com/in/erickcarrasco",
    },
    {
      id: "ruan",
      name: "Ruan Guedes",
      role: "COO",
      image: "/image/about/ruan.png",
      description:
        "Ruan gerencia operações, garantindo eficiência e alinhamento com os objetivos da NOOK.",
      linkedin: "https://linkedin.com/in/ruanguedes",
    },
    {
      id: "italo",
      name: "Ítalo Braz",
      role: "CTO",
      image: "/image/about/italo.png",
      description:
        "Ítalo lidera o desenvolvimento técnico, trazendo soluções inovadoras para os projetos.",
      linkedin: "https://linkedin.com/in/italobraz",
    },
    {
      id: "lucas",
      name: "Lucas Vicente",
      role: "DEV",
      image: "/image/about/lucas.png",
      description:
        "Lucas é um desenvolvedor dedicado, criando código robusto para as aplicações da NOOK.",
      linkedin: "https://linkedin.com/in/lucasvicente",
    },
    {
      id: "pedro",
      name: "Pedro Caribé",
      role: "CDO",
      image: "/image/about/pedro.png",
      description:
        "Pedro lidera o design, criando experiências visuais impactantes e acessíveis.",
      linkedin: "https://linkedin.com/in/pedrocaribe",
    },
    {
      id: "danton",
      name: "Danton Prates",
      role: "Designer",
      image: "/image/about/danton.png",
      description:
        "Danton traz criatividade ao design, aprimorando a estética dos produtos NOOK.",
      linkedin: "https://linkedin.com/in/dantonprates",
    },
    {
      id: "dandara",
      name: "Dandara Gouveia",
      role: "DBA",
      image: "/image/about/dandara.png",
      description:
        "Dandara gerencia bancos de dados, garantindo segurança e performance.",
      linkedin: "https://linkedin.com/in/dandaragouveia",
    },
    {
      id: "ivo",
      name: "Ivo Leonardo",
      role: "Mentor",
      image: "/image/about/ivo.png",
      description:
        "Ivo orienta a equipe com sua experiência, impulsionando o crescimento da NOOK.",
      linkedin: "https://linkedin.com/in/ivoleonardo",
    },
  ];

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
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="relative flex flex-col items-center text-center group cursor-pointer"
                  data-aos="zoom-in"
                  data-aos-delay={400 + index * 50}
                  onClick={() => toggleDescription(member.id)}
                >
                  <Image
                    src={member.image}
                    width={150}
                    height={150}
                    quality={100}
                    alt={`Foto de ${member.name}`}
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 200px"
                  />
                  <div className="mt-2">
                    <h3 className="font-semibold text-base sm:text-lg">
                      {member.name}
                    </h3>
                    <span className="text-gray-600 text-sm sm:text-base">
                      {member.role}
                    </span>
                  </div>
                  <div
                    className={`absolute top-0 left-0 w-full h-full bg-white ${activeMember === member.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                      } lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 shadow-lg rounded-lg p-4 flex flex-col items-center justify-center`}
                  >
                    <p className="text-sm text-gray-700 mb-4">
                      {member.description}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <FaLinkedin className="text-[#103ADA] text-xl hover:text-[#0A66C2] transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}