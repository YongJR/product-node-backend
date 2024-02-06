const express = require("express")
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController")
const router = express.Router()

//Get all products
router.get("/", getProducts)

//Get 1 product by id
router.get("/:id", getProduct)

//Create a product
router.post("/", createProduct)

//Update product
router.put("/:id", updateProduct)

//Delete product
router.delete("/:id", deleteProduct)

module.exports = router
