import { Router } from "express";
import {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  addWishlist,
  removeWishlist,
} from "../controllers/movie.controller.js";
import { isLoggedIn, authRole } from "../middleware/auth.middleware.js";
import AuthRoles from "../utils/authRole.js";

const router = Router();

// Routes
router.get("/get", isLoggedIn, getMovies);
router.post("/add", isLoggedIn, authRole(AuthRoles.ADMIN), addMovie);
router.put(
  "/update/:movieId",
  isLoggedIn,
  authRole(AuthRoles.ADMIN),
  updateMovie
);
router.delete(
  "/delete/:movieId",
  isLoggedIn,
  authRole(AuthRoles.ADMIN),
  deleteMovie
);
router.put("/update/add_wishlist/:movieId", isLoggedIn, addWishlist);
router.put("/update/remove_wishlist/:movieId", isLoggedIn, removeWishlist);

export default router;