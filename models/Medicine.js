import mongoose from "mongoose"

const MedicineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  expiry: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
  },
  shop: {
    type: String,
    required: true,
  },
})

const Medicine = mongoose.model("medicine", MedicineSchema)

export default Medicine
