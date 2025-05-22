const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

// importing from its controller
const {
  addReview,
  updateReview,
  deleteReview
} = require("../controllers/reviewController");

// endpoint for add review
router.post("/books/:id/reviews", auth, addReview);

// endpoint for update their review 
router.put("/:id", auth, updateReview);

// end-point for 
router.delete("/:id", auth, deleteReview);

module.exports = router;
