import { useState } from "react";
import { Link } from "react-router-dom";
import { ModalCreate } from "../ModalCreate";
import logoHome from "../../assets/logo/logohome.svg";

export function Navbar({ setReload, setIsLoading }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        aria-label="Site Header"
        className="drop-shadow-md fixed w-full  bg-cyan-50 "
      >
        <div className="mx-auto max-w-screen-xl p-4 ">
          <div className="flex items-center justify-between gap-4 lg:gap-10">
            <div className="flex ">
              <p>
                <span className="sr-only"></span>
                <Link
                  className=" flex text-sky-400 relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-sky-400 before:transition hover:before:scale-100"
                  to="/"
                >
                  <img
                    className="ml-3 relative h-6 font-bold text-gray-700 "
                    src={logoHome}
                  />
                  <span className="ml-3 relative  w-20 font-bold text-xl text-gray-700 ">
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
            <nav
              aria-label="Site Nav"
              className=" gap-8 text-sm font-medium md:flex"
            >
              <div className="pt- justify-end sm:flex">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className=" inline-block rounded border border-sky-400 bg-sky-400 px-10 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-sky-400 focus:outline-none focus:ring active:text-sky-400"
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
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
