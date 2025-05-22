const Review = require("../models/Review");

// add new review
exports.addReviewService = async (bookId, userId, reviewData) => {
  const exists = await Review.findOne({ book: bookId, user: userId });  // checking review exist for book and with same user
  if (exists) throw new Error("Review already exists");

  const review = await Review.create({ ...reviewData, user: userId, book: bookId });
  return review;
};

// update review
exports.updateReviewService = async (reviewId, userId, updateData) => {
  const review = await Review.findById(reviewId);
  if (!review) throw new Error("Review not found");
  if (review.user.toString() !== userId) throw new Error("Not allowed");

  Object.assign(review, updateData);
  await review.save();
  return review;
};

// delete review
exports.deleteReviewService = async (reviewId, userId) => {
  const review = await Review.findById(reviewId);
  if (!review) throw new Error("Review not found");
  if (review.user.toString() !== userId) throw new Error("Not allowed");

  await review.remove();
  return { message: "Deleted" };
};
