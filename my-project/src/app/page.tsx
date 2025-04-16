import Header from "./components/Header";
import Footer from "../app/components/Footer"
import Image from "next/image";
import obim01 from "../../public/image/aplication/obi01.png"
import obi02 from "../../public/image/aplication/obi02.png"
import vupt01 from "../../public/image/aplication/vupt01.png"
import vupt02 from "../../public/image/aplication/vupt02.png"
import metodologia from "../../public/image/aplication/metodologia.png"


export default function aplication() {
  return (
    <>
    <Header/>
       <main className="bg-white min-h-screen px-8 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl font-semibold text-black">
          Plataforma <span className="text-[#103ADA] font-medium">OBI</span>
        </h1>
        <p className="text-gray-700 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-700 mt-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="text-gray-700 mt-4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          src={obim01} 
          alt="Mockup da plataforma"
          width={300}
          height={600}
          className="rounded-xl drop-shadow-lg"
        />
      </div>

      
      <div className="flex flex-col lg:flex-row gap-12 col-span-full mt-12">
        
        <div className="flex justify-center lg:justify-start">
          <div className=" p-2">
            <Image
              src={obi02}
              alt="Ilustração"
              width={180}
              height={180}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 text-gray-800">
          <div>
            <h2 className="font-semibold text-xl">O problema</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-xl">A solução</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      




      <div>
        <h1 className="text-4xl font-semibold text-black">
          Vupt! Express
        </h1>
        <p className="text-gray-700 mt-4">
        A VUPT! EXPRESS é uma plataforma inovadora que tem como objetivo principal resolver problemas enfrentados por pequenos varejistas, como mercadinhos, lojas de suplementos, farmácias, pet shops, entre outros, relacionados ao tempo de espera nas filas e a falta de integração no processo de compras. Focada em facilitar e agilizar a entrega de produtos para consumidores, a plataforma atua na otimização de pedidos e no gerenciamento eficiente das entregas
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          src={vupt01} 
          alt="Mockup da plataforma"
          width={300}
          height={600}
          className="rounded-xl drop-shadow-lg"
        />
      </div>

      
      <div className="flex flex-col lg:flex-row gap-12 col-span-full mt-12">
        
        <div className="flex justify-center lg:justify-start">
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
          <div>
            <h2 className="font-semibold text-xl">O problema</h2>
            <p className="mt-2">
            A VUPT! EXPRESS foi desenvolvida para resolver três problemas principais enfrentados por pequenos comerciantes e consumidores: Filas Longas; Falta de Integração e Automação; Erros em Pedidos.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-xl">A solução</h2>
            <p className="mt-2">
            A VUPT! EXPRESS propõe uma solução baseada em tecnologia, que automatiza e simplifica o processo de compra e entrega. A plataforma integra pequenos comerciantes, sistemas de pagamento e logística de entrega, oferecendo uma experiência rápida e sem erros para os consumidores.
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
        <div>
          <h2 className="text-3xl font-semibold text-black mb-4">
            Metodologia usada
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src={metodologia}
            alt="Ilustração de metodologia"
            width={280}
            height={280}
            className="w-auto h-auto max-w-[280px]"
          />
        </div>
      </div>
      
  </main>
   
  <Footer/>
    </>
   
  );
}
