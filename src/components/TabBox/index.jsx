export function TabBox({ tab }) {
  return (
    <>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-auto h-auto">
        <img
          alt="Office"
          src={tab.image}
          className="h-56 w-full object-cover"
        />
        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
            Criado: {tab.createdAt.slice(0, 10)}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">{tab.title}</h3>
          </a>

          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {tab.content}
          </p>
        </div>
      </article>
    </>
  );
}
