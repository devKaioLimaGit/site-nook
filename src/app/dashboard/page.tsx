
"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header"; // Adjust path as needed
import Footer from "../components/Footer"; // Adjust path as needed
import Link from "next/link";
import { getCookieClient } from "@/lib/cookieClient";
import { api } from "@/services/api";
import { ToastContainer, toast } from "react-toastify";
import { Editor } from "@tinymce/tinymce-react"; // Import TinyMCE Editor

interface ListCategoryProps {
  id: string;
  name: string;
}

export default function Dashboard() {
  const [categories, setCategories] = useState<ListCategoryProps[] | null>(null);
  const [reload, setReload] = useState<boolean>(false);
  const [editorContent, setEditorContent] = useState<string>(""); // State for TinyMCE content
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // State for select
  const [isMounted, setIsMounted] = useState<boolean>(false); // State for client-side mounting

  // Ensure TinyMCE only renders on client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    async function listCategory() {
      const token = await getCookieClient();
      try {
        const data = await api.get("/category", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategories(data.data);
        toast.success("Categorias carregadas!");
      } catch {
        toast.error("Erro ao carregar categorias!");
      }
    }
    listCategory();
  }, [reload]);

  async function handlerCategory(formData: FormData) {
    const token = await getCookieClient();
    const name = formData.get("name");
    if(name === ""){
      toast.warning("Não pode cadastrar categoria vazia!");
      return
    }
    try {
      await api.post(
        "/category",
        { name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReload(!reload); // Simplified toggle
      toast.success("Categoria criada com sucesso!");
    } catch {
      toast.error("Falha ao criar categoria!");
    }
  }

  async function handlerNews(formData: FormData) {
    const token = await getCookieClient();
    const name = formData.get("name");
    const file = formData.get("file") as File;

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", name as string);
      formDataToSend.append("description", editorContent); // Use TinyMCE content
      formDataToSend.append("category_id", selectedCategory); // Use selected category
      if (file) formDataToSend.append("file", file);

      await api.post("/news", formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Notícia criada com sucesso!");
    } catch (error) {
      toast.error("Falha ao criar notícia!");
      console.error(error);
    }
  }

  return (
    <>
      <ToastContainer />
      {/* Header */}
      <header className="relative z-30 w-full bg-gray-900">
        <Header />
      </header>

      {/* Main Section */}
      <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="relative max-w-3xl mx-auto">
          {/* Category Creation Form */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-8">
            Criar Nova{" "}
            <span className="text-[#103ADA] relative inline-block">
              Categoria
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent"></span>
            </span>
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <form action={handlerCategory} className="space-y-6">
              <div>
                <label htmlFor="category_name" className="block text-sm font-medium text-gray-200">
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
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-[#103ADA] to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                >
                  Criar
                </button>
              </div>
            </form>
          </div>
          <br />
          <br />
          <br />
          {/* News Creation Form */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mb-8">
            Criar Nova{" "}
            <span className="text-[#103ADA] relative inline-block">
              Notícia
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent"></span>
            </span>
          </h1>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12">
            <form action={handlerNews} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200">
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

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-200">
                  Descrição
                </label>
                {isMounted ? (
                  <Editor
                    apiKey="766zvz9u238gxk8uy3c32byl75prbxva6dvuhhc7aybo3184" // Your TinyMCE API key
                    value={editorContent}
                    onEditorChange={(content) => setEditorContent(content)}
                    init={{
                      language: "pt_BR",
                      height: 400,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | code preview | fullscreen | help",
                      menubar: "file edit view insert format tools table help",
                      content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                      toolbar_mode: "wrap",
                      image_advtab: true,
                      file_picker_types: "file image media",
                      automatic_uploads: true,
                      images_upload_url: "/api/upload", // Adjust to your API endpoint for image uploads
                    }}
                  />
                ) : (
                  <textarea
                    id="description"
                    name="description"
                    rows={6}
                    className="mt-2 block w-full rounded-lg border-none bg-gray-700/50 text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-[#103ADA] focus:border-transparent py-3 px-4 transition-all duration-300"
                    placeholder="Carregando editor..."
                    disabled
                  />
                )}
              </div>

              <div>
                <label htmlFor="category_id" className="block text-sm font-medium text-gray-200">
                  Categoria
                </label>
                <select
                  name="category_id"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="mt-2 block w-full rounded-lg border-none bg-gray-700/50 text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-[#103ADA] focus:border-transparent py-3 px-4 transition-all duration-300"
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {categories?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="file" className="block text-sm font-medium text-gray-200">
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

              <div className="flex justify-end space-x-4">
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
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
