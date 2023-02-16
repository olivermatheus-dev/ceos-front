import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../utils/api";

export function ModalUpdate({
  isOpen,
  setIsOpen,
  formsInfo,
  setReload,
  setIsLoading,
}) {
  // Configurações copiadas e coladas de Updatetap

  const params = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(formsInfo);

  function handleChange({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const infosForAPI = { data: { ...form } };

      await api.put(`/tabs/${params.tabId}`, infosForAPI);
      setIsOpen(false);
      setIsLoading((isLoading) => {
        return !isLoading;
      });
      setReload((reload) => {
        return !reload;
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function handleDelete(e) {
    try {
      e.preventDefault();
      await api.delete(`/tabs/${params.tabId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {isOpen && (
        <>
          <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
            <div className="bg-white px-4 py-14 rounded-md text-center">
              <h1 className="text-xl mb-4 font-bold text-slate-500">
                Tab Edit
              </h1>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-80 sm:w-128"
              >
                <div className="ml-1 text-left">
                  <label
                    htmlFor="author"
                    className=" text-xs font-medium text-gray-700"
                  >
                    Your name:
                  </label>
                  <input
                    type="text"
                    id="author"
                    value={form.author}
                    onChange={handleChange}
                    name="author"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    placeholder="Coloque seu nome"
                  />
                </div>
                <div className="ml-1 text-left">
                  <label
                    htmlFor="title"
                    className="ml-1 text-left text-xs font-medium text-gray-700"
                  >
                    Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={form.title}
                    onChange={handleChange}
                    name="title"
                    placeholder="Título do tab"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
                <div className="ml-1 text-left">
                  <label
                    htmlFor="content"
                    className="ml-1 text-left text-xs font-medium text-gray-700"
                  >
                    Content:
                  </label>
                  <textarea
                    type="text"
                    id="content"
                    value={form.content}
                    onChange={handleChange}
                    name="content"
                    placeholder="Escreva algo para compartilhar com a comunidade"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    rows="4"
                  />
                </div>
                {/* <div className="ml-1 text-left">
                  <label
                    htmlFor="image"
                    className="ml-1 text-left text-xs font-medium text-gray-700"
                  >
                    Image:
                  </label>
                  <input
                    type="text"
                    id="image"
                    value={form.image}
                    onChange={handleChange}
                    name="image"
                    placeholder="Link da imagem"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div> */}
                <div className="ml-1 text-left">
                  <label
                    htmlFor="category"
                    className="ml-1 text-left text-xs font-medium text-gray-700"
                  >
                    Category:
                  </label>

                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="category"
                    name="category"
                    onChange={handleChange}
                  >
                    <option value="react">React</option>
                    <option value="javascript">JavaScript</option>
                    <option value="nextjs">NextJs</option>
                    <option value="outros">Outros</option>
                    <option value="" selected>
                      Selecione uma categoria
                    </option>
                  </select>
                </div>
                <div className="flex items-center mt-3 mb-2 flex-col gap-2">
                  <input
                    className="w-36 cursor-pointer inline-block rounded border border-sky-400 bg-sky-400 px-10 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-sky-400 focus:outline-none focus:ring active:text-sky-400"
                    type={"submit"}
                    onClick={() => {
                      return handleSubmit;
                    }}
                    value="Atualizar"
                  />
                  <button
                    className="w-36 cursor-pointer inline-block rounded border border-red-500 bg-red-500 px-10 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-red-500 focus:outline-none focus:ring active:text-red-400"
                    onClick={handleDelete}
                  >
                    Deletar
                  </button>
                </div>
              </form>

              <button
                className="bg-indigo-400 px-4 py-2 rounded-md text-md text-white"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
