import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Course() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category') || '';

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        setBooks(res.data);
        filterBooks(res.data, category);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, [category]);

  const filterBooks = (books, category) => {
    if (category === '') {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
      setFilteredBooks(filtered);
    }
  };

  const handleCategoryChange = (e) => {
    navigate(`/course?category=${e.target.value}`);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-3xl">
          Unlock Your Knowledge: Explore Our <span className="text-orange-500">Courses Today! :)</span>
        </h1>
        <p className="mt-12">
          Dive into a world of knowledge and imagination with our carefully curated book selection.
          Whether you're seeking thrilling adventures, timeless classics, or the latest bestsellers,
          we have something for every reader. Explore our diverse collection and find your next great
          read today. Happy reading!
        </p>
        <Link to="/">
          <button className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 duration-300">Back</button>
        </Link>
      </div>
      <div className=" pl-4 flex flex-col mt-16 items-start">
        <select
          className="p-2 w-45 rounded-md border border-gray-300 mt-4"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Select Category</option>
          <option value="free">Free</option>
          <option value="romance">Romance</option>
          <option value="suspense\thriller">Suspense\Thriller</option>
          <option value="fitness">Fitness</option>
          <option value="cooking">Cooking</option>
          <option value="mythology">Mythology</option>
        </select>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4">
        {filteredBooks.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;



