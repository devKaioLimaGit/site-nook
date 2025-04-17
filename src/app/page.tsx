import Image from "next/image";
import Header from "./components/HeaderHome";
import Footer from "./components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-gray-900">
        {/* Imagem de fundo com efeito parallax sutil */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/home/pessoal.jpeg"
            alt="Grupo NOOK - Conectados para construir o seu amanhã"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={90}
            priority
            className="transform transition-transform duration-[10s] ease-out scale-110 hover:scale-100"
          />
        </div>

        {/* Camada de gradiente com opacidade dinâmica */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 z-10"></div>

        {/* Partículas de fundo para um toque futurista */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-pulse-slow"></div>
        </div>

        {/* Header fixo */}
        <header className="relative z-30 w-full">
          <Header />
        </header>

        {/* Conteúdo ajustado para ficar mais próximo do header */}
        <div className="absolute top-52 sm:top-52 md:top-40 left-0 right-0 flex flex-col justify-start items-center md:items-start z-20 text-white px-4 sm:px-6 md:px-10 lg:px-16">
          {/* Subtítulo com animação */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wider uppercase opacity-90 animate-slideInUp delay-200">
            Conectados para
          </p>

          {/* Título principal com destaque */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mt-2 md:mt-4 max-w-4xl animate-slideInUp delay-400">
            CONSTRUIR O SEU{" "}
            <span className="relative inline-block">
              AMANHÃ!
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent transform scale-x-0 animate-underline origin-left"></span>
            </span>
          </h1>

          {/* Marca com efeito de brilho */}
          <p className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold animate-slideInUp delay-600">
            <span className="relative">
              NOOK
              <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent blur-md opacity-75 animate-glow"></span>
            </span>
          </p>

          {/* Botão CTA com animação avançada */}
          <Link href={"/aplication"}>
            <button
              className="mt-6 sm:mt-8 px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-gray-900 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 hover:from-gray-100 hover:to-white focus:outline-none focus:ring-4 focus:ring-white/50 animate-slideInUp delay-800"
              aria-label="Saiba mais sobre a NOOK"
            >
              Descubra Agora
            </button>
          </Link>
        </div>
      </section>
      <section className="px-4 py-8 max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:px-8 sm:py-12 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="order-1 lg:order-none">
          <h1 className="text-3xl font-semibold text-black sm:text-4xl">
            Pense em{" "}
            <span className="text-[#103ADA] font-medium">Inovação</span>
          </h1>
          <p className="mt-6 text-lg text-left text-black sm:mt-8 sm:text-xl md:text-2xl">
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
        />
      </section>

      <section className="relative w-full bg-gray-900 text-white py-16">
        {/* Imagem de fundo */}
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

        {/* Camada preta translúcida */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Conteúdo */}
        <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagem à esquerda */}
          <div className="w-full">
            <Image
              src="/image/home/pessoalpart2.png"
              alt="Grupo NOOK"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Texto à direita */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Quem somos</h2>
            <p className="text-lg">
              A NOOK é uma empresa de tecnologia focada na inclusão de jovens no
              mercado de trabalho, com o objetivo de impactar social para a
              melhoria a curto e longo prazo, promovendo o desenvolvimento em
              transformação profissional. Estamos conectados para construir
              talentos que impactam a sociedade da melhor forma.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Saiba mais →
            </button>
          </div>
        </div>

        {/* Blocos de texto abaixo */}
        <div className="relative max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bloco 1 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nosso time</h3>
            <p className="text-gray-300">
              O time da startup é formado por mentes inovadoras, com alta
              capacidade de adaptação e foco em resultados. Cada membro
              contribui com habilidades únicas, criando uma sinergia que
              impulsiona o crescimento. A colaboração e a paixão pelo propósito
              movem o grupo em direção à excelência. Juntos, eles transformam
              ideias em soluções reais que impactam positivamente o mundo.
            </p>
          </div>

          {/* Bloco 2 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nossa missão</h3>
            <p className="text-gray-300">
              Desenvolver soluções tecnológicas inovadoras que promovam a
              inclusão de jovens no mercado de trabalho, criando oportunidades
              de crescimento e impacto social positivo.
            </p>
          </div>

          {/* Bloco 3 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nossa visão</h3>
            <p className="text-gray-300">
              Ser referência em inovação social e tecnológica para a inclusão de
              jovens, promovendo comunidades mais conectadas e transformadoras.
            </p>
          </div>
        </div>

        {/* Bloco de valores à direita */}
        <div className="relative max-w-6xl mx-auto px-4 mt-12 text-right">
          <h3 className="text-xl font-semibold">Nossos valores</h3>
          <p className="text-gray-300">
            Inclusão, acessibilidade, inovação, compromisso social e
            transformação.
          </p>
        </div>
      </section>

      <section className="px-8 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-semibold text-black">
            Principais{" "}
            <span className="text-[#103ADA] font-medium">Aplicações</span>
          </h1>
          <p className="mt-8 text-2xl text-left">
            Nosso portfólio de inovações é focado em resolver problemas reais.
            Conheça nossas soluções
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 col-span-full mt-12 items-center justify-around">
          <div className="bg-[#D9D9D9] shadow-xl shadow-black/50 rounded-[16px] p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/image/home/logoobi.png"
              alt="Logo 5up"
              width={150}
              height={75}
            />
            <h2 className="mt-6 text-2xl">OBI</h2>
            <p className="mt-6 text-lg text-center">
              Plataforma pedagógica inclusiva para alunos neurodivergentes.
            </p>
            <Link href={"/aplication"}>
              <button className="p-2 mt-6 bg-[#103ADA] rounded-xl min-w-[200px] text-white text-lg">
                Saiba Mais
              </button>
            </Link>
          </div>
          <div className="bg-[#D9D9D9] shadow-xl shadow-black/50 rounded-[16px] p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/image/home/logovupt.png"
              alt="Logo Senac"
              width={150}
              height={75}
            />
            <h2 className="mt-6 text-2xl">VUPT! EXPRESS</h2>
            <p className="mt-6 text-lg text-center">
              Otimização de compras e entregas para pequenos varejistas.
            </p>
            <Link href={"/aplication"}>
              <button className="p-2 mt-6 bg-[#103ADA] rounded-xl min-w-[200px] text-white text-lg">
                Saiba Mais
              </button>
            </Link>
          </div>

          {/* <div className="bg-white shadow-xl shadow-black/50 rounded-[20px] p-8 flex flex-col items-center">
            <Image
              src="/image/home/logogymshop.png"
              alt="Logo Ideias"
              width={200}
              height={100}
            />
            <h2 className="mt-8 text-3xl">GYM SHOP</h2>
            <p className="mt-8 text-2xl text-center ">
              Conexão entre profissionais e serviços de saúde e bem-estar.
            </p>
            <button className="p-2 mt-8 bg-blue-600 rounded-2xl min-w-[300] text-white text-2xl">
              Saiba Mais
            </button>
          </div> */}
        </div>
      </section>
      <section className="px-8 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <h1 className="text-3xl font-semibold text-black sm:text-4xl mb-10">
          Nossos <span className="text-[#103ADA] font-medium">Parceiros</span>
        </h1>{" "}
        <div
          className="flex flex-col lg:flex-row gap-12 col-span-full mt-12 items-center justify-around
 "
        >
          <Image
            src="/image/home/logoideias.svg"
            alt="Logo Ideias"
            width={200}
            height={100}
          />

          <Image
            src="/image/home/logosenac.png"
            alt="Logo Senac"
            width={200}
            height={100}
          />

          <Image
            src="/image/home/logo5up.png"
            alt="Logo 5up"
            width={200}
            height={100}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
