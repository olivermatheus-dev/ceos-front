import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ButtonFull } from "../../components/ButtonFull";
import { ModalUpdate } from "../../components/ModalUpdate";
import { api } from "../../utils/api";
import javascript from "../../assets/javascript/javascript.jpg";

export function TabDetails() {
  console.log(javascript);
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
                  // src={tabs.image}
                  src={`/src/assets/${tabs.category}/${tabs.category}.jpg`}
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
      {!isLoading && (
        <div className="w-screen h-screen flex items-center justify-center">
          <div role="status">
            <svg
              aria-hidden="true"
              class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-sky-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}
