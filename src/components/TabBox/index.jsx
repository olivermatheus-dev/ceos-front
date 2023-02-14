export function TabBox({ tab }) {
  return (
    <>
      <article className="rounded-xl border-2 border-gray-100 bg-white pt-5 ">
        <div className="flex items-start p-6">
          <div className="block shrink-0">
            <img
              alt="Imagem miniatura"
              src={tab.image}
              className="h-14 w-14 rounded-lg object-cover"
            />
          </div>

          <div className="ml-4">
            <h3 className="font-medium sm:text-lg w-128">{tab.title}</h3>

            <p className="text-sm text-gray-700 line-clamp-2 w-128">
              {tab.content}
            </p>

            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <p className="ml-1 text-xs">14 comments</p>
              </div>

              <span className="hidden sm:block" aria-hidden="true">
                &middot;
              </span>

              <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                Posted by
                <span className="font-medium pl-1 hover:text-gray-700">
                  {tab.author}
                </span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
