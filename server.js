require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const productRoute = require("./routes/productRoute")
const errorMiddleware = require("./middleware/errorMiddleware")
const cors = require("cors")

const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

var corsOptions = {
  origin: [FRONTEND, "http://example.com"],
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use("/api/products", productRoute)

app.use(errorMiddleware)

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to DB")
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
