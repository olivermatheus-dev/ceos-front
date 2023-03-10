import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api";

export function Form() {
  const [form, setForm] = useState({
    author: "",
    title: "",
    content: "",
    image: "",
    category: "",
  });

  const navigate = useNavigate();

  function handleChange({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const infosForAPI = { data: { ...form } };

      await api.post("/tabs", infosForAPI);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={form.author}
          onChange={handleChange}
          name="author"
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={form.title}
          onChange={handleChange}
          name="title"
        />
        <label htmlFor="content">Content:</label>
        <input
          type="text"
          id="content"
          value={form.content}
          onChange={handleChange}
          name="content"
        />
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          value={form.image}
          onChange={handleChange}
          name="image"
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={form.category}
          onChange={handleChange}
          name="category"
        />
        <button>Cadastrar</button>
      </form>
    </>
  );
}
