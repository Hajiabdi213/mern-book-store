import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose
      .connect("mongodb://localhost:27017/book_store_mern")
      .then(() => console.log("Connected to MongoDb"));
  } catch (error) {
    console.log(error.message);
    process.exit(1); // 1 means - exit   0 means success
  }
};
