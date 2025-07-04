function BookList({ books, onDelete }) {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {books.map((book, i) => {
          return (
            <li
              key={i}
              style={{
                position: "relative",
                marginTop: "5px",
                backgroundColor: "cadetblue",
                color: "white",
                border: "1px solid white",
                width: "100%",

                maxWidth: "600px",
              }}
            >
              <strong
                style={{ color: book.title.length > 10 ? "red" : "white" }}
              >
                {book.title}
              </strong>{" "}
              by <em>{book.author}</em>
              <button
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "30%",
                  transform: "translateY(-40%),",
                }}
                onClick={() => onDelete(book.title)}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BookList;
