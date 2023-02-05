import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    state: {
      type: String,
      required: false,
      min: 2,
      max: 100,
    },
    country: {
      type: String,
      required: false,
      min: 2,
      max: 100,
    },
    occupation: {
      type: String,
      required: false,
      min: 2,
      max: 100,
    },
    phone: String,
    transaction: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    transactions: {
        type: Array,
        default: [],
      },
    location: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
