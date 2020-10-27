import express from 'express'
import expressAsyncHandler from "express-async-handler"
const router = express.Router();
import Product from '../models/productModels.js'

// @Route GET /api/products
// acess Public
router.get("/", expressAsyncHandler(async (req,res) => {
    const products = await Product.find({})

    res.json(products)
}))

// @Route GET /api/product/:id
// acess Public
router.get("/:id", expressAsyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    } else {
        res.status(404).json({message: "Product Not Found"})
    }
}))
export default router;