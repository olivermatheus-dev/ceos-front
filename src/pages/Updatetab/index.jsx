import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../utils/api";

export function UpdateTab() {
  const navigate = useNavigate();
  const params = useParams();

  const [form, setForm] = useState({
    author: "",
    title: "",
    content: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    async function fetchTab() {
      try {
        const response = await api.get(`/tabs/${params.tabId}`);
        setForm(response.data.data.attributes);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTab();
  }, []);

  function handleChange({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const infosForAPI = { data: { ...form } };

      await api.put(`/tabs/${params.tabId}`, infosForAPI);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Form update</h1>
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
        <button>Update</button>
      </form>
    </>
  );
}
