import Image from "next/image";
import Header from "./components/HeaderHome";
export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen">
        {/* Imagem de fundo com Next.js */}
        <Image
          src="/image/home/pessoal.jpeg"
          alt="Grupo NOOK"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0 z-0"
          priority // Para carregar a imagem imediatamente
        />

        {/* Camada preta translúcida */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Header fixo no topo */}
        <div className="relative z-10">
          <Header />
        </div>

        {/* Texto ajustado para a posição da imagem */}
        <div className="absolute top-[30%] left-8 z-10 text-white text-left px-4">
          <p className="text-xl md:text-2xl">Conectados para</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            CONSTRUIR O SEU AMANHÃ!
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-semibold">NOOK</p>
        </div>
      </section>

      <section className="px-8 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-semibold text-black">
            Pense em{" "}
            <span className="text-[#103ADA] font-medium">Inovação</span>
          </h1>
          <p className="mt-8 text-2xl text-left text-black">
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
          className="ml-auto"
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
              Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore magna aliqua, ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
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
          <div className="bg-white shadow-xl shadow-black/50 rounded-[20px] p-8 flex flex-col items-center">
            <Image
              src="/image/home/logoobi.png"
              alt="Logo 5up"
              width={200}
              height={100}
            />
            <h2 className="mt-8 text-3xl">OBI</h2>
            <p className="mt-8 text-2xl text-center ">
              Plataforma pedagógica inclusiva para alunos neurodivergentes.
            </p>
            <button className="p-2 mt-8 bg-blue-600 rounded-2xl min-w-[300] text-white text-2xl">
              Saiba Mais
            </button>
          </div>
          <div className="bg-white shadow-xl shadow-black/50 rounded-[20px] p-8 flex flex-col items-center">
            <Image
              src="/image/home/logovupt.png"
              alt="Logo Senac"
              width={200}
              height={100}
            />
            <h2 className="mt-8 text-3xl">VUPT! EXPRESS</h2>
            <p className="mt-8 text-2xl text-center">
              Otimização de compras e entregas para pequenos varejistas.
            </p>
            <button className="p-2 mt-8 bg-blue-600 rounded-2xl min-w-[300] text-white text-2xl">
              Saiba Mais
            </button>
          </div>
          <div className="bg-white shadow-xl shadow-black/50 rounded-[20px] p-8 flex flex-col items-center">
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
          </div>
        </div>
      </section>
      <section className="px-8 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <h1 className="text-4xl font-semibold text-black">Nosso Parceiros:</h1>
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
    </>
  );
}
