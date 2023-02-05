import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
  getUserTransactions,
  addRemoveTransaction,
} from "../controllers/users.js";
import { Auth } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", Auth, getUser);
router.get("/:id/friends", Auth, getUserFriends);
router.get("/:id/transactions", Auth, getUserTransactions);

/* UPDATE */
router.patch("/:id/:friendId", Auth, addRemoveFriend);
router.patch("/:id/:transactionId", Auth, addRemoveTransaction);

export default router;