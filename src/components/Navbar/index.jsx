import { useState } from "react";
import { Link } from "react-router-dom";
import { ModalCreate } from "../ModalCreate";

export function Navbar({ setReload, setIsLoading }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        aria-label="Site Header"
        className="shadow-sm fixed w-full  bg-cyan-50 "
      >
        <div className="mx-auto max-w-screen-xl p-4 ">
          <div className="flex items-center justify-between gap-4 lg:gap-10">
            <div className="flex ">
              <p>
                <span className="sr-only"></span>

                <Link
                  className="text-sky-400 relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-sky-400 before:transition hover:before:scale-100"
                  to="/"
                >
                  <span className="ml-3 relative h-10 w-20 font-bold text-gray-700 ">
                    Ceos
                  </span>
                </Link>
              </p>
            </div>

            <nav
              aria-label="Site Nav"
              className=" gap-8 text-sm font-medium md:flex"
            >
              <Link
                className="text-sky-400 relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-sky-400 before:transition hover:before:scale-100"
                to="/"
              >
                Home
              </Link>
            </nav>

            <div className="pt- justify-end sm:flex">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="mt-6 inline-block rounded border border-sky-400 bg-sky-400 px-10 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-sky-400 focus:outline-none focus:ring active:text-sky-400"
              >
                Criar
              </button>
              {isOpen && (
                <ModalCreate
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  setReload={setReload}
                  setIsLoading={setIsLoading}
                />
              )}
            </div>

            {/* <div className="lg:hidden">
              <button
                className="rounded-lg bg-gray-100 p-2 text-gray-600"
                type="button"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}
