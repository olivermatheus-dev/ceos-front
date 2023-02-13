import axios from "axios";

// const apiURLs = {
//   development: "http://localhost:1337/api",
//   production: "",
// };

//apiURL[process.env.NODE_ENV]

const api = axios.create({
  baseURL: "https://alestauranteapi.onrender.com/api",
});

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer 5ea9718ce2fc4d74d4a12fd6870ee6c8b92b7907d594d19df822c2da16137f4cf00c186cd3e413c0fd2f366576351e6699463574ffbed47b18cf309bd9b5fb6055aaa547eaafd603ff2c22dca9db49e6d8679ebf9b8ec6c9e57ed3c9535cf0acc09e7ca7f4e54def66eca7e735325790412fe66348efcc5dab86c4f6631ccfe3`,
  };

  return config;
});

export { api };
