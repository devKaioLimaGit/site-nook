  "use client";
  import { useEffect, useState } from "react";
  // import { io, Socket } from "socket.io-client";
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import Link from "next/link";

  // let socket: Socket;

  interface NewsType {
    id: string;
    title: string;
    banner: string;
    description: string;
    created_at: string;
    updated_at: string;
    user?: {
      id: string;
      name: string;
      email: string;
    };
    category?: {
      name: string;
    };
  }

  export default function News() {
    const [newsList, setNewsList] = useState<NewsType[]>([]);

    useEffect(() => {
      AOS.init({
        duration: 800,
        once: true,
      });

      async function fetchNews() {
        try {
          const response = await fetch("https://nook-amber.vercel.app/news");
          const data = await response.json();
          setNewsList(data);
        } catch (error) {
          console.error("Erro ao buscar notícias:", error);
        }
      }

      fetchNews();

      // socket = io("http://localhost:3000");

      // socket.on("newsCreated", (news: NewsType) => {
      //   console.log(news)
      //   setNewsList((prev) => [news, ...prev]);
      // });

      // return () => {
      //   socket.disconnect();
      // };
    }, []);

    return (
      <>
        <Header />
        <div className="w-full min-h-screen px-6 py-10 bg-gray-50">
          <h1 className="text-3xl font-semibold text-black sm:text-4xl" data-aos="fade-right" data-aos-delay="200">
            Notícias <span className="text-[#103ADA] font-medium">Nook</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {newsList.map((item, index) => (
              <div key={item.id} className="bg-white p-4 rounded shadow" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <img src={`${item.banner}`} alt={item.title} className="w-full h-48 object-cover rounded" />
                <button
                  className="relative mt-2 bg-gradient-to-r from-[#103ADA] to-blue-500 text-white font-semibold rounded-xl min-w-[180px] transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300/50 z-10"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  {item.category?.name || "Sem categoria"} {/* Verificação de segurança */}
                </button>
                <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
                <h2 className="text-[16] font-medium mt-4">
                  Publicado por: <span className="text-[#103ADA] font-medium">{item.user?.name || "Desconhecido"}</span>
                </h2>
                <span className="text-sm text-gray-400 mt-4 block">
                  Criado em: {new Date(item.created_at).toLocaleString()}
                </span>
                <Link href={`/news/article/${item.id}`}>
                  <button
                    className="w-full relative mt-6 px-6 py-2 bg-gradient-to-r from-[#103ADA] to-blue-500 text-white font-semibold rounded-xl min-w-[180px] transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300/50 z-10"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    Saiba Mais
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }