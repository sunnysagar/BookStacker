const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  // adding all method from 
  addBook,
  getBooks,
  getBookDetails,
  searchBooks
} = require("../controllers/bookController");

router.post("/", auth, addBook);
router.get("/", getBooks);
router.get("/search", searchBooks);
router.get("/:id", getBookDetails);

module.exports = router;
