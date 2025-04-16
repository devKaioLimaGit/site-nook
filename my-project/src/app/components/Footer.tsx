import logoNook from "../../../public/image/footer/logoNOOK.png"
import linkdin from "../../../public/image/footer/linkdin.png"
import twitter from "../../../public/image/footer/TwitterX.png"
import facebook from "../../../public/image/footer/Facebook.png"
import instagram from "../../../public/image/footer/Instagram.png"
import Image from "next/image"

export default function Footer() {
    return (
      <footer className="bg-[#0c0b12] text-white py-10 px-8 md:px-20">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-10 border-b border-gray-700 pb-8">
          {/* Logo e Social */}
          <div className="text-center md:text-left">
            {/* Logo Nook */}
            <Image src={logoNook} alt="Logo Nook" width={120} height={60} className="mx-auto" />

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <Image src={twitter} alt="X" width={30} height={10} className="cursor-pointer hover:opacity-75" />
              <Image src={instagram} alt="Instagram" width={30} height={10} className="cursor-pointer hover:opacity-75" />
              <Image src={facebook} alt="Facebook" width={30} height={10} className="cursor-pointer hover:opacity-75" />
              <Image src={linkdin} alt="LinkedIn" width={30} height={10} className="cursor-pointer hover:opacity-75" />
            </div>
          </div>
  
          {/* Recursos */}
          <div className="text-center md:text-left">
            <h2 className="font-semibold text-lg mb-4">Recursos</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Documentação</a></li>
              <li><a href="#">Aplicações</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Políticas</a></li>
            </ul>
          </div>
  
          {/* Companhia */}
          <div className="text-center md:text-left">
            <h2 className="font-semibold text-lg mb-4">Companhia</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Parcerias</a></li>
              <li><a href="#">Propósito</a></li>
              <li><a href="#">Equipe</a></li>
            </ul>
          </div>
  
          {/* Contatos */}
          <div className="text-center md:text-left">
            <h2 className="font-semibold text-lg mb-4">Contatos</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </div>
        </div>
  
        {/* Direitos reservados */}
        <div className="text-xs text-gray-500 text-center mt-6">
          © 2024 Nook. Todos os direitos reservados.
        </div>
      </footer>
    );
}
