import mongoose from "mongoose"

const db = process.env.CONNECTION_STRING

mongoose.set("strictQuery", true, "useNewUrlParser", true,)

const connectDB = async () => {
  try {
    await mongoose.connect(db)
    console.log("MongoDB is connected...")
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

export default connectDB