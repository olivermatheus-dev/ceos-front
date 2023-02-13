import axios from "axios";

// const apiURLs = {
//   development: "http://localhost:1337/api",
//   production: "https://alestauranteapi.onrender.com/api",
// };

//apiURL[process.env.NODE_ENV]

const api = axios.create({
  baseURL: "https://alestauranteapi.onrender.com/api",
});

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer a6537f7f8e8ff3ed5a7ef039f3cd7b1fe8ac0ab6d73bd435d95d7536509956586e04f458d575d865dfa7d5d915f9195bcf26910bbd845fb812ecb9128fcaad858f921d0ae6cb8cd1cdddc9733d6971a9be5c895f9160d801a0a30d65b07ec88f7907b78a141bd52423e1b580f93bc9d08f376476ceaa99c91de810a13780a4c6`,
  };

  return config;
});

export { api };
