import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ButtonFull } from "../../components/ButtonFull";
import { ModalUpdate } from "../../components/ModalUpdate";
import { api } from "../../utils/api";

export function TabDetails() {
  const params = useParams();
  const [tabs, setTabs] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchTabs() {
      try {
        const response = await api.get(`/tabs/${params.tabId}`);
        setTabs(response.data.data.attributes);
        setIsLoading(!isLoading);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTabs();
  }, [reload]);
  return (
    <>
      {isLoading && (
        <>
          <div className="h-16"></div>
          <main className="w-full">
            <div className="flex justify-between px-4 mx-auto max-w-screen-md">
              <article className="mx-auto w-full">
                <img
                  src={tabs.image}
                  alt={`Imagem do cabeçalho do post sobre ${tabs.title}`}
                  className="h-48 w-full object-cover "
                />
                <header className="mb-4 lg:mb-6 not-format">
                  <address className="flex items-center mb-6 not-italic">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <div>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">
                          {tabs.author}
                        </p>
                        <p className="text-base font-light text-gray-500 dark:text-gray-400">
                          <time
                            dateTime="2022-02-08"
                            title="February 8th, 2022"
                          >
                            {tabs.createdAt}
                          </time>
                        </p>
                      </div>
                    </div>
                  </address>
                  <h1 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-2 lg:text-4xl dark:text-white">
                    {tabs.title}
                  </h1>
                </header>
                <p className="lead">{tabs.content}</p>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="mt-6 inline-block rounded border border-sky-400 bg-sky-400 px-10 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-sky-400 focus:outline-none focus:ring active:text-sky-400"
                >
                  Abrir Edição
                </button>
                <ModalUpdate
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  formsInfo={tabs}
                  setReload={setReload}
                  setIsLoading={setIsLoading}
                  isLoading={isLoading}
                />
              </article>
            </div>
          </main>
        </>
      )}
    </>
  );
}
