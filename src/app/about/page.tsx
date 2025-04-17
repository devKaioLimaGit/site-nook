import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <section className="w-full max-w-7xl bg-white px-4 sm:px-6 lg:px-8 py-12 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-10 gap-8">
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl font-semibold text-black sm:text-4xl mb-10">
                Saiba mais sobre nós!
              </h1>
              <h3 className="text-xl sm:text-2xl font-bold mb-4  text-center lg:text-left">
                O que somos
              </h3>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">
                EMPRESA DE SOLUÇÕES <br /> TECNOLÓGICAS
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
                A NOOK desenvolve soluções tecnológicas que abordam desafios
                enfrentados por populações minoritárias, usando a inovação para
                promover inclusão e acessibilidade. Nossa proposta é oferecer
                ferramentas eficazes para melhorar processos e transformar a
                vida das pessoas, construindo um futuro onde a tecnologia serve
                ao bem social.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
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

          <div className="flex flex-col lg:flex-row-reverse items-center justify-between mt-10 gap-8">
            <div className="w-full lg:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">
                O que somos
              </h3>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left">
                NOOK
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
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
            <div className="w-full lg:w-1/2 flex justify-center">
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

        <section className="w-full max-w-7xl bg-white px-4 sm:px-6 lg:px-8 py-12 mx-auto">
          <h1 className="text-3xl font-semibold text-black sm:text-4xl mb-10">
            Equipe <span className="text-[#103ADA] font-medium">NOOK</span>
          </h1>
          <div className="w-full flex flex-col justify-center items-start mb-10">
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/image/about/carrasco.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de um membro da equipe"
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
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/image/about/ruan.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de um membro da equipe"
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
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/image/about/italo.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de um membro da equipe"
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
              </div>

              <div className="flex flex-col items-center text-center">
                <Image
                  src="/image/about/lucas.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de um membro da equipe"
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
              </div>

              <div className="flex flex-col items-center text-center">
                <Image
                  src="/image/about/pedro.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de um membro da equipe"
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
              </div>

              <div className="flex flex-col items-center text-center">
                <Image
                  src="/image/about/danton.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de um membro da equipe"
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
              </div>

              <div className="flex flex-col items-center text-center">
                <Image
                  src="/image/about/dandara.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de um membro da equipe"
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
              </div>


              <div className="flex flex-col items-center text-center">
                <Image
                  src="/image/about/ivo.png"
                  width={150}
                  height={150}
                  quality={100}
                  alt="Foto de um membro da equipe"
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
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
