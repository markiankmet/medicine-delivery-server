import express from "express"
import Medicine from "../../models/Medicine.js"

const router = express.Router()

// @route GET /medicines
// @description Get all medicines
// @access Public
router.get("/", (req, res) => {
  Medicine.find()
    .then(medicines => res.json(medicines))
    .catch(err => res.status(404).json({ nomedicinesfound: "No medicines found" }))
})

// @route GET /medicines/:id
// @description Get single medicine by id
// @access Public
router.get("/:id", (req, res) => {
  Medicine.findById(req.params.id)
    .then(medicine => res.json(medicine))
    .catch(err => res.status(404).json({ nomedicinefound: "No medicine found" }))
})

// @route POST /medicines
// @description Add new medicine
// @access Public
router.post("/", (req, res) => {
  Medicine.create(req.body)
    .then(medicine => res.json({ msg: "Medicine added successfully" }))
    .catch(err => res.status(400).json({ error: "Unable to add this medicine" }))
})

export default router