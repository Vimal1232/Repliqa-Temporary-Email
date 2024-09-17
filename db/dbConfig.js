import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Db Connected Successfully");
  } catch (error) {
    console.log("Something Went Wrong with Db");
    console.log(error);
  }
}
