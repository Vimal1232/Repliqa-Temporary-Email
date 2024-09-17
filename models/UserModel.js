import mongoose, { models } from "mongoose";

const UserModel = new mongoose.Schema(
  {
    UserName: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.Users || mongoose.model("Users", UserModel);

export default User;
