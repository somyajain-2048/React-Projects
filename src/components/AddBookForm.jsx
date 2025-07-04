import { useState } from "react";

function AddBookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuhtor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    onAdd(title, author);
    setTitle("");
    setAuhtor("");
  };
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxHeight: "100%",
          marginTop: "10px",
        }}
      >
        <input
          type="text"
          placeholder="enter book name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            border: "1px solid black",
            fontSize: "10px",
            padding: "8px",
          }}
        />
        <input
          type="text"
          name="author"
          placeholder="author name"
          value={author}
          onChange={(e) => setAuhtor(e.target.value)}
          style={{
            border: "1px solid black",
            fontSize: "10px",
            padding: "8px",
            marginLeft: "2px",
          }}
        />
        <button
          type="submit"
          disabled={title.trim() === "" || author.trim() === ""}
          style={{
            backgroundColor:
              title.trim() === "" || author.trim() === "" ? "grey" : "green",
            color: "white",
            border: "1px solid black",
            marginLeft: "5px",
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBookForm;
