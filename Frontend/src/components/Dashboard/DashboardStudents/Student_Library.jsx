import axios from "axios";
import React, { useState } from "react";
const Student_Library = () => {
  const [book, SetBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyAyXBXnI2tZB4cI2qq0TnPd_uSQFWy_E3c"
  );

  const handleChange = (e) => {
    const book = e.target.value;
    SetBook(book);
  };
  const handlebook = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=40"
      )
      .then((data) => {
        console.log(data.data.items);

        setResult(data.data.items);
      });
  };
  return (
    <div>
      <h5>welcome to Libarary</h5>

      <form className="mb-4" onSubmit={handlebook}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Book Search "
          onChange={handleChange}
          autoComplete="off"
          className="py-2 px-4 mr-3 rounded-2xl  w-[50%]"
        />
        <button type="submit" className=" rounded-lg py-2 px-3 border-2">
          Search
        </button>
      </form>
      <div className="grid grid-cols-5 gap-4 ...">
        {result &&
          result.length &&
          result.map((books) => (
            <div className="">
              <a href={books.volumeInfo.previewLink} target="_blank">
                <img
                  src={books.volumeInfo.imageLinks.thumbnail}
                  alt={books.title}
                />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Student_Library;
