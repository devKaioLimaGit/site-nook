"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { use } from "react";

// Tipo de dados do artigo
type Article = {
  id: string;
  title: string;
  banner: string;
  description: string;
  created_at: string;
  category: {
    name: string;
  };
  user: {
    name: string;
  };
};

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  // Unwrap params usando React.use()
  const resolvedParams = use(params);
  const paramId = resolvedParams.id;

  useEffect(() => {
    if (!paramId) {
      notFound();
      return;
    }

    async function fetchArticle() {
      try {
        const response = await fetch(`https://nooke-ashen.vercel.app/news/article/${paramId}`);
        if (!response.ok) {
          throw new Error("Artigo não encontrado");
        }

        const data: Article = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Erro ao buscar artigo:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();

    // Inicializa o AOS
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
    });

    return () => AOS.refresh();
  }, [paramId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        <p className="ml-3 text-base font-medium text-gray-700">Carregando artigo...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <p className="text-base font-medium text-gray-700">Artigo não encontrado.</p>
      </div>
    );
  }

  // Formata a data de criação
  const formattedDate = new Date(article.created_at).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (<>
<Header/>
<div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Banner imagem */}
        <div className="relative w-full h-64 sm:h-80 mb-8 rounded-lg overflow-hidden" data-aos="fade-up">
          <img
            src={article.banner}
            alt={article.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Título */}
        <h1
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {article.title}
        </h1>

        {/* Informações do artigo */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-gray-200"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="space-y-1">
            <p className="text-sm text-gray-600">
              Por <span className="font-medium text-gray-900">{article.user.name}</span>
            </p>
            <p className="text-sm text-gray-600">
              Categoria: <span className="font-medium text-gray-900">{article.category.name}</span>
            </p>
          </div>
          <p className="text-sm text-gray-600">Publicado em {formattedDate}</p>
        </div>

        {/* Descrição do artigo */}
        <div
          className="prose prose-base max-w-none text-gray-800 leading-7"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p>{article.description}</p>
        </div>

        {/* Botão de voltar */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="400">
          <Link
            href="/news"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#103ADA] rounded-md hover:bg-gray-200 transition-colors"
            aria-label="Voltar para a página inicial"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Voltar para a página inicial
          </Link>
        </div>
      </article>
    </div>
    <Footer/>
  </>

  );
}