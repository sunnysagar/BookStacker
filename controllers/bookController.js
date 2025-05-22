const {
  addBookService,
  getBooksService,
  getBookDetailsService,
  searchBooksService,
} = require("../services/bookService");

exports.addBook = async (req, res) => {
  try {
    const book = await addBookService(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await getBooksService(req.query);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBookDetails = async (req, res) => {
  try {
    const result = await getBookDetailsService(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(404).json({ message: "Book not found" });
  }
};

exports.searchBooks = async (req, res) => {
  try {
    const books = await searchBooksService(req.query.q || "");
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
