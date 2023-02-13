export function Form() {
  const [form, setForm] = useState({
    author: "",
    title: "",
    content: "",
    image: "",
    category: "",
  });

  function handleChange({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //async;
    setForm({ author: "", title: "", content: "", image: "", category: "" });
  }
  return (
    <>
      <h1>Form</h1>
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
          name="text"
        />
        <label htmlFor="author">Image:</label>
        <input
          type="text"
          id="image"
          value={form.image}
          onChange={handleChange}
          name="image"
        />
        <label htmlFor="author">Category:</label>
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
