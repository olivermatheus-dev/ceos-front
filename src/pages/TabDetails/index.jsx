import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../utils/api";

export function TabDetails() {
  const params = useParams();
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    async function fetchTabs() {
      try {
        const response = await api.get(`/tabs/${params.tabId}`);
        console.log(response.data.data);
        setTabs(response.data.data.attributes);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTabs();
  }, []);

  return (
    <>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
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
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        {tabs.createdAt}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {tabs.title}
              </h1>
            </header>
            <p className="lead">{tabs.content}</p>
            <Link
              className="inline-block rounded border border-sky-400 bg-sky-400 px-10 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-sky-400 focus:outline-none focus:ring active:text-sky-400"
              to="/"
            >
              <button>Contribuir</button>
            </Link>
          </article>
        </div>
      </main>
    </>
  );
}