import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    userId: { 
      type: String, 
      required: true 
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    cost: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
