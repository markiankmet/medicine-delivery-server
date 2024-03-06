import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

import routes from "./routes/api/medicines.js"
import connectDB from "./config/db.js";

const app = express()

app.use(cors({ orgin: true, credentials: true }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/medicines", routes)

connectDB()

app.get("/", (req, res) => res.send("Hello World!"))

const port = process.env.PORT || 8082

app.listen(port, () => console.log(`Server is running on port ${port}`))