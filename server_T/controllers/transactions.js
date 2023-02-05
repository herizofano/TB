import Transaction from "../models/Transaction";
import User from "../models/User";


/* CREATE */
export const createTransaction = async (req, res) => {
    try {
      const { userId } = req.body;
      const user = await User.findById(userId);
      const newTransaction = new Transaction({
        userId,
        firstName: user.firstName,
        lastName: user.lastName,
        cost,
        products:[],
        comments: [],
      });
      await newTransaction.save();
  
      const transaction = await Transaction.find();
      res.status(201).json(transaction);
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
  };
  
  /* READ */
  export const getFeedTransactions = async (req, res) => {
    try {
      const transaction = await Transaction.find();
      res.status(200).json(transaction);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
  export const getUserTransactions = async (req, res) => {
    try {
      const { userId } = req.params;
      const transaction = await Transaction.find({ userId });
      res.status(200).json(transaction);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
  /* UPDATE */
  export const likeTransaction = async (req, res) => {
    try {
      const { id } = req.params;
      const { userId } = req.body;
      const transaction = await Transaction.findById(id);
      const isLiked = transaction.likes.get(userId);
  
      if (isLiked) {
        transaction.likes.delete(userId);
      } else {
        transaction.likes.set(userId, true);
      }
  
      const updatedTransaction = await Transaction.findByIdAndUpdate(
        id,
        { likes: transaction.likes },
        { new: true }
      );
  
      res.status(200).json(updatedTransaction);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  