// import BookCard from "./components/Bookcard";
// import Login from "./components/Login";

// function App() {
//   const bookarr = [
//     { id: 1, title: "400Days", author: "Chetan Bhagat", price: 300 },
//     { id: 2, title: "October Junction", author: "Manav Kaul", price: 340 },
//     { id: 3, title: "delhi darbar", author: "siya singh", price: 250 },
//   ];
//   console.log(bookarr);
// return (
//   <div>
// {
//   /* //       <h1>Book List</h1>
// //       {bookarr.map((item, index) => { */
// }
// {
//   /* //         return (
// //           <BookCard */
// }
// {
/* // key={index}
      // title={item.title}
      // author={item.author}
      // price={item.price} */
// }
// {
/* />
        );
//       })} */
// }
// {
/* <Login />
    </div>
  );
}

export default App; */
// }

import { useState } from "react";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setbooks] = useState([]);
  const [searchbook, setSearchbook] = useState("");

  const handleAdd = (title, author) => {
    const newBook = { title, author };
    setbooks([...books, newBook]);
  };

  const handleDelete = (titletoremove) => {
    const updatedBooks = books.filter((book) => book.title != titletoremove);
    setbooks(updatedBooks);
  };

  const filterbook = books.filter((book) =>
    book.title.toLowerCase().includes(searchbook.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}>
        Book App
      </h1>

      <input
        type="text"
        placeholder="enter book for serch"
        value={searchbook}
        onChange={(e) => setSearchbook(e.target.value)}
        style={{
          padding: "10px",
          margin: "10px auto",
          display: "block",
          width: "60%",
          border: "1px solid black",
        }}
      />

      <p style={{ textAlign: "center" }}>Total Books: {books.length}</p>
      <AddBookForm onAdd={handleAdd} />
      <BookList books={filterbook} onDelete={handleDelete} />

      {books.length > 0 && (
        <button
          onClick={() => setbooks([])}
          style={{
            marginTop: "10px",
            backgroundColor: "red",
            color: "white",
            border: "1px solid black",
            padding: "5px 10px",
            display: "Block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Clear All Books
        </button>
      )}
    </div>
  );
}

export default App;
