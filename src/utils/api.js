import axios from "axios";

// const apiURLs = {
//   development: "http://localhost:1337/api",
//   production: "",
// };

//apiURL[process.env.NODE_ENV]

const api = axios.create({
  baseURL: "https://ceosapi.onrender.com/api",
});

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer 99fed76d1ffeb2dc640b7c3b2b5a91cf074920f0e86f5faa44cc1fc279e0fefbf8b2d8447cd049fc45e5f870d2b211cb04ba8c052ca6646bccb8670d89f459485f06a403cfc17e16120ab846c561b484a21cdfe601790b8f83e7f52ae1aae287cf130f4a577319c0617d6f1f98f635366b23cd7691fbe50e39653a7850ce47d1`,
  };

  return config;
});

export { api };
