import mangoos from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectioninsatnce = await mangoos.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n mongoo db connected:${connectioninsatnce.Connection.host}`);
  } catch (error) {
    console.log("manogoo conection error", error);
    process.exit(1);
  }
};
export default connectDB;
