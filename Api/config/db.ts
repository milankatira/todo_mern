import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
      process.env.MONGOURL || "mongodb://localhost:27017/CRUD"
    );

    console.log("monodb connected successfully");
  } catch (err: any) {
    console.log(`error connecting to Mongo Server ${err.message}`);
  }
};
