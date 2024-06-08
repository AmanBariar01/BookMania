import React from 'react';
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl mb-6">
          Welcome to <strong className="text-orange-500">BookMania!</strong>
        </h1>
        <p className="mt-6">
          At <strong>BookMania</strong>, we believe that every book is a gateway to a new adventure, a journey of discovery, 
          and a source of inspiration.<br/> Our mission is to connect readers with stories that captivate the mind and enrich 
          the soul.<br/><br/> For any queries related to <strong>BookMania</strong> you can contact us below!
        </p>
        <Link to="/contact">
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 duration-300">Contact</button>
        </Link>
        <div className="text-left space-y-6 md:space-y-8 mt-16">
          <h2 className="text-xl md:text-2xl font-semibold">About Us</h2>
          <p>
            Founded in <strong>2024</strong>, <strong>BookMania</strong> started as a small, passionate endeavor by book lovers who wanted to share their love of reading with the world. Over the years, we've grown into a vibrant community hub, where readers of all ages and backgrounds come together to explore, learn, and share their love for books. Our journey began with a simple idea: to create a space where book enthusiasts can discover new titles, share their thoughts, and connect with like-minded individuals.
          </p>
          <p>
            At <strong>BookMania</strong>, we strive to offer more than just a bookstore experience. We aim to be a haven for readers, where the joy of discovery is celebrated every day. Our extensive collection spans a wide array of genres, ensuring that there’s something for everyone. From classic literature to contemporary fiction, from gripping mysteries to heartwarming romances, and from thought-provoking non-fiction to enchanting children’s books, our shelves are filled with treasures waiting to be explored.
          </p>
          <p>
            We take pride in our carefully curated selection, which reflects our commitment to quality and diversity. Every book we offer has been chosen with care, ensuring that our readers have access to a rich and varied literary landscape. Whether you’re looking for the latest bestseller or a hidden gem, you’ll find it at <strong>BookMania</strong>.
          </p>
          <p>
            Our vision extends beyond providing great books; we aim to foster a vibrant literary community. We host a variety of events, including author signings, book clubs, and storytelling sessions, to bring readers together and to celebrate the joy of reading. Our knowledgeable and friendly staff are always on hand to offer personalized recommendations and to help you find your next favorite book.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold">Our Community</h2>
          <p>
            At <strong>BookMania</strong>, we pride ourselves on being a cornerstone of the community. We host regular events such as author signings, book clubs, and storytelling sessions to foster a love of reading and to bring people together. Our knowledgeable and friendly staff are always on hand to provide personalized recommendations and to help you discover new favorites.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold">Our Commitment</h2>
          <p>
            We are dedicated to creating a welcoming and inclusive environment where everyone feels at home. We continuously strive to improve our services and to ensure that every visit to <strong>BookMania</strong> is a memorable one.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold">Join Us</h2>
          <p>
            Whether you're a lifelong reader or just starting your literary journey, we invite you to join us at <strong>BookMania</strong>. Come in, explore our shelves, and get lost in a book. Your next adventure awaits!
          </p>
          <p>
            Thank you for being a part of our story.
          </p>
          <p className="font-semibold ">Warm regards,<br />The <span className="text-orange-500">BookMania </span>Team</p>
        </div>
      </div>
    </div>
  );
}

export default About;
