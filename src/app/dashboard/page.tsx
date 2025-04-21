"use client";
import { useEffect } from "react";
import Header from "../components/Header"; // Adjust path as needed
import Footer from "../components/Footer"; // Adjust path as needed
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { getCookieClient } from "@/lib/cookieClient";
import { api

 } from "@/services/api";

 import { ToastContainer, toast } from 'react-toastify';
export default function CreateNews() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    async function handlerCategory(formData: FormData) {
        const token = await getCookieClient();
        const name = formData.get("name");
        console.log(name, token)
        try {
            await api.post(
                "/category",
                { name},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success("Categoria criada com sucesso!");
        } catch {
            toast.error("Falha ao criar categoria!");
        }
    }

    return (
        <>
        <ToastContainer/>
            {/* Header */}
            <header className="relative z-30 w-full bg-gray-900">
                <Header />
            </header>

            {/* Main Section */}
            <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-pulse-slow z-0"></div>
                <div className="relative max-w-3xl mx-auto">
                    {/* News Creation Form */}
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mb-8"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Criar Nova{" "}
                        <span className="text-[#103ADA] relative inline-block">
                            Notícia
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent"></span>
                        </span>
                    </h1>

                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <form className="space-y-6">
                            <div data-aos="fade-up" data-aos-delay="600">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-200"
                                >
                                    Título da Notícia
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-2 block w-full rounded-lg border-none bg-gray-700/50 text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-[#103ADA] focus:border-transparent py-3 px-4 transition-all duration-300"
                                    placeholder="Digite o título da notícia"
                                />
                            </div>

                            <div data-aos="fade-up" data-aos-delay="700">
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-gray-200"
                                >
                                    Descrição
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={6}
                                    className="mt-2 block w-full rounded-lg border-none bg-gray-700/50 text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-[#103ADA] focus:border-transparent py-3 px-4 transition-all duration-300"
                                    placeholder="Digite a descrição da notícia"
                                />
                            </div>

                            <div data-aos="fade-up" data-aos-delay="800">
                                <label
                                    htmlFor="category_id"
                                    className="block text-sm font-medium text-gray-200"
                                >
                                    ID da Categoria
                                </label>
                                <input
                                    type="text"
                                    id="category_id"
                                    name="category_id"
                                    className="mt-2 block w-full rounded-lg border-none bg-gray-700/50 text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-[#103ADA] focus:border-transparent py-3 px-4 transition-all duration-300"
                                    placeholder="Digite o ID da categoria"
                                />
                            </div>

                            <div data-aos="fade-up" data-aos-delay="900">
                                <label
                                    htmlFor="file"
                                    className="block text-sm font-medium text-gray-200"
                                >
                                    Imagem do Banner
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    accept="image/*"
                                    className="mt-2 block w-full text-sm text-gray-300 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#103ADA] file:text-white hover:file:bg-blue-700 transition-all duration-300"
                                />
                            </div>

                            <div
                                className="flex justify-end space-x-4"
                                data-aos="fade-up"
                                data-aos-delay="1000"
                            >
                                <Link href="/">
                                    <button
                                        type="button"
                                        className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-300/50"
                                    >
                                        Cancelar
                                    </button>
                                </Link>
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-gradient-to-r from-[#103ADA] to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                                >
                                    Criar Notícia
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Category Creation Form */}
                    <h2
                        className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-8"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Criar Nova{" "}
                        <span className="text-[#103ADA] relative inline-block">
                            Categoria
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent"></span>
                        </span>
                    </h2>

                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <form action={handlerCategory} className="space-y-6">
                            <div data-aos="fade-up" data-aos-delay="600">
                                <label
                                    htmlFor="category_name"
                                    className="block text-sm font-medium text-gray-200"
                                >
                                    Nome da Categoria
                                </label>
                                <input
                                    type="text"
                                    id="category_name"
                                    name="name"
                                    className="mt-2 block w-full rounded-lg border-none bg-gray-700/50 text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-[#103ADA] focus:border-transparent py-3 px-4 transition-all duration-300"
                                    placeholder="Digite o nome da categoria"
                                />
                            </div>

                            <div
                                className="flex justify-end"
                                data-aos="fade-up"
                                data-aos-delay="700"
                            >
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-gradient-to-r from-[#103ADA] to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                                >
                                    Criar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
}