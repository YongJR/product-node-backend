const Product = require("../models/productModel")
const asyncHandler = require("express-async-handler")

//Get all product
const getProducts = asyncHandler(async (req, res) => {
  try {
    const product = await Product.find({})
    res.status(200).json(product)
  } catch (error) {
    res.status(500)
    throw new Error(error.message)
  }
})

//Get a product
const getProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    if (!product) {
      res.status(404)
      throw new Error(`Cannot find product with the id of ${id}`)
    }
    res.status(200).json(product)
  } catch (error) {
    res.status(500)
    throw new Error(error.message)
  }
})

//Create a product
const createProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
  } catch (error) {
    res.status(500)
    throw new Error(error.message)
  }
})

//Update a product
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body)
    if (!product) {
      res.status(404)
      throw new Error(`Cannot find product with the id of ${id}`)
    }
    const updatedData = await Product.findById(id)
    res.status(200).json(updatedData)
  } catch (error) {
    res.status(500)
    throw new Error(error.message)
  }
})

//Delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findByIdAndDelete(id)
    if (!product) {
      res.status(404)
      throw new Error(`Cannot find product with the id of ${id}`)
    }
    const allData = await Product.find({})
    res.status(200).json(allData)
  } catch (error) {
    res.status(500)
    throw new Error(error.message)
  }
})

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}
