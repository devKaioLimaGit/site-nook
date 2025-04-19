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

export default function aplication() {
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
      <main className="bg-white min-h-screen px-8 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right" data-aos-delay="200">
          <h1 className="text-4xl font-semibold text-black">
            Plataforma <span className="text-[#103ADA] font-medium">OBI</span>
          </h1>
          <p className="text-gray-700 mt-4">
            A Obi é uma aplicação desenvolvida para otimizar a comunicação e a gestão dentro de instituições de ensino.
            Ela atua como um elo entre alunos, professores e coordenação, facilitando o acesso a informações relevantes e promovendo uma comunicação mais ágil e eficiente.
            Por meio de uma interface simples e intuitiva, a Obi permite o envio de comunicados, o acompanhamento do desempenho dos alunos, a organização de turmas, registro de dados pedagógicos e muito mais.
            Com isso, a aplicação não apenas reduz falhas de comunicação, mas também fortalece a relação entre a escola e a comunidade escolar, contribuindo para uma educação mais transparente, colaborativa e tecnológica.
          </p>
        </div>

        <div className="flex justify-center" data-aos="fade-left" data-aos-delay="300">
          <Image
            src={obim01}
            alt="Mockup da plataforma"
            width={300}
            height={600}
            className="rounded-xl drop-shadow-lg"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 col-span-full mt-12">
          <div className="flex justify-center lg:justify-start" data-aos="zoom-in" data-aos-delay="400">
            <div className="p-2">
              <Image
                src={obi02}
                alt="Ilustração"
                width={180}
                height={180}
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 text-gray-800">
            <div data-aos="fade-up" data-aos-delay="500">
              <h2 className="font-semibold text-xl">O problema</h2>
              <p className="mt-2">
                Ela resolve o problema da desorganização e da falta de integração entre alunos, professores e coordenação, que prejudica o acompanhamento pedagógico.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <h2 className="font-semibold text-xl">A solução</h2>
              <p className="mt-2">
                Sua solução centraliza informações acadêmicas, comunicados, atividades e dados dos alunos em uma plataforma acessível e intuitiva.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-delay="200">
          <h1 className="text-4xl font-semibold text-black">
            Vupt! Express
          </h1>
          <p className="text-gray-700 mt-4">
            A VUPT! EXPRESS é uma plataforma inovadora que tem como objetivo principal resolver problemas enfrentados por pequenos varejistas, como mercadinhos, lojas de suplementos, farmácias, pet shops, entre outros, relacionados ao tempo de espera nas filas e a falta de integração no processo de compras. Focada em facilitar e agilizar a entrega de produtos para consumidores, a plataforma atua na otimização de pedidos e no gerenciamento eficiente das entregas
          </p>
        </div>

        <div className="flex justify-center" data-aos="fade-left" data-aos-delay="300">
          <Image
            src={vupt01}
            alt="Mockup da plataforma"
            width={300}
            height={600}
            className="rounded-xl drop-shadow-lg"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 col-span-full mt-12">
          <div className="flex justify-center lg:justify-start" data-aos="zoom-in" data-aos-delay="400">
            <div className="p-2">
              <Image
                src={vupt02}
                alt="Ilustração"
                width={380}
                height={180}
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 text-gray-800">
            <div data-aos="fade-up" data-aos-delay="500">
              <h2 className="font-semibold text-xl">O problema</h2>
              <p className="mt-2">
                A VUPT! EXPRESS foi desenvolvida para resolver três problemas principais enfrentados por pequenos comerciantes e consumidores: Filas Longas; Falta de Integração e Automação; Erros em Pedidos.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <h2 className="font-semibold text-xl">A solução</h2>
              <p className="mt-2">
                A VUPT! EXPRESS propõe uma solução baseada em tecnologia, que automatiza e simplifica o processo de compra e entrega. A plataforma integra pequenos comerciantes, sistemas de pagamento e logística de entrega, oferecendo uma experiência rápida e sem erros para os consumidores.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
          <div data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Metodologia usada
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Para construir nossas aplicações, utilizamos uma metodologia inovadora baseada na escuta ativa, prototipagem rápida e validação contínua com os usuários finais.
              Colocamos alunos, professores e gestores no centro do processo, ouvindo suas dores reais e testando soluções em ciclos curtos de desenvolvimento.
              Combinamos princípios de design centrado no usuário com práticas ágeis, o que nos permite criar produtos funcionais, leves e alinhados às necessidades do ambiente educacional.
              Essa abordagem colaborativa garante que cada funcionalidade da Obi resolva um problema específico, tornando a aplicação prática, eficiente e verdadeiramente útil para o dia a dia das escolas.
            </p>
          </div>

          <div className="flex justify-center" >
            <Image
              src={metodologia}
              alt="Ilustração de metodologia"
              width={280}
              height={280}
              className="max-w-[280px]"
              loading="eager" // Força carregamento imediato
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}