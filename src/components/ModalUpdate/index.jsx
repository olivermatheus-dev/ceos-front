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
            <div className="bg-white px-16 py-14 rounded-md text-center">
              <h1 className="text-xl mb-4 font-bold text-slate-500">
                Janela de Edição
              </h1>
              <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="author" className="font-bold text-left">
                  Author:
                </label>
                <input
                  type="text"
                  id="author"
                  value={form.author}
                  onChange={handleChange}
                  name="author"
                />
                <label htmlFor="title" className="font-bold">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  value={form.title}
                  onChange={handleChange}
                  name="title"
                />
                <label htmlFor="content" className="font-bold">
                  Content:
                </label>
                <input
                  type="text"
                  id="content"
                  value={form.content}
                  onChange={handleChange}
                  name="content"
                />
                <label htmlFor="image" className="font-bold">
                  Image:
                </label>
                <input
                  type="text"
                  id="image"
                  value={form.image}
                  onChange={handleChange}
                  name="image"
                />
                <label htmlFor="category">Category:</label>
                <input
                  type="text"
                  id="category"
                  value={form.category}
                  onChange={handleChange}
                  name="category"
                  className="font-bold"
                />
                {/* <button
                  className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                  type="submit"
                >
                  Atualizar
                </button> */}
                <input
                  className="bg-indigo-500 px-7 py-2 rounded-md text-md text-white font-semibold cursor-pointer"
                  type={"submit"}
                  onClick={() => {
                    return handleSubmit;
                  }}
                  value="Atualizar"
                />
                {console.log(form)}
                <button
                  className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
                  onClick={handleDelete}
                >
                  Deletar
                </button>
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
