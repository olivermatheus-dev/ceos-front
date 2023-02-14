import { Link } from "react-router-dom";

export function ButtonFull({ to, text }) {
  return (
    <>
      <Link
        className="inline-block rounded border border-sky-400 bg-sky-400 px-10 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-sky-400 focus:outline-none focus:ring active:text-sky-400"
        to={to}
      >
        <button>{text}</button>
      </Link>
    </>
  );
}
