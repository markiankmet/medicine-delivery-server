import mongoose from "mongoose"

const db = "mongodb+srv://devuser:gFQ0fIEKzxlCxhOw@medicine-delivery-db.yw9kc1a.mongodb.net/?retryWrites=true&w=majority&appName=medicine-delivery-db"

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