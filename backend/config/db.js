import mongoose from "mongoose";
import Color from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.bold.underline
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDB;
