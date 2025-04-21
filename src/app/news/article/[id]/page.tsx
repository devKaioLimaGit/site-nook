"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
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

        const data: Article = await response.json(); // Parse the response body
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
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // Cleanup do AOS ao desmontar o componente
    return () => AOS.refresh();
  }, [paramId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
        <p className="ml-4 text-lg text-gray-600">Carregando artigo...</p>
      </div>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <header className="mb-8">
        <h1
          className="text-4xl font-bold text-gray-900 mb-4 leading-tight"
          data-aos="fade-up"
        >
          {article.title}
        </h1>
        <div
          className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {article.category.name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Por</span>
            <span className="font-medium">{article.user.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Publicado em</span>
            <span className="font-medium">
              {new Date(article.created_at).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </header>

      {article.banner && (
        <div className="mb-8 relative w-full h-[500px]" data-aos="zoom-in">
          <Image
            src={article.banner}
            alt={article.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
      )}

      <div
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        data-aos="fade-up"
      >
        <p>{article.description}</p>
      </div>

      <Link href="/news">
        <button
          className="w-full relative mt-6 px-6 py-2 bg-gradient-to-r from-[#103ADA] to-blue-500 text-white font-semibold rounded-xl min-w-[180px] transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300/50 z-10"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Voltar para Notícias
        </button>
      </Link>
    </article>
  );
}
