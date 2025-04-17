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
          <h1 className="text-5xl font-bold">Principais Aplicações</h1>
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
        <h1 className="text-5xl font-bold">Nosso Parceiros:</h1>
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
