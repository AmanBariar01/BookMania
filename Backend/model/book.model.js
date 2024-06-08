import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: String,
    price: Number,
    category: String,
    image: String,
    description: String,
});
const Book = mongoose.model("Book", bookSchema);

export default Book;