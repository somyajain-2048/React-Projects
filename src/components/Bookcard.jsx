import { useState } from "react";

function Bookcard(props) {
  const [showDetails, setshowDetails] = useState(false);
  return (
    <div
      className="card"
      style={{
        backgroundColor: "beige",
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>Title:{props.title}</h3>
      <p>Author:{props.author}</p>

      <button
        onClick={() => setshowDetails(!showDetails)}
        style={{
          border: "1px solid black",
          margin: "5px",
          backgroundColor: "green",
          padding: "4px",
        }}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <>
          <p>Price:{props.price}</p>
          {props.price > 250 && (
            <p style={{ color: "green" }}>Discount Available</p>
          )}
        </>
      )}
    </div>
  );
}

export default Bookcard;
