const mongoose = require('mongoose')

const productModel = require('../models/prodcutModel')
const cartModel = require('../models/cartItemModel')

// create a product
exports.createProduct = async (req, res) => {
  try {
    let product = await productModel.create(req.body)

    res.status(200).json({
      status: 1,
      data: product
    })

  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}

// carts
exports.enterItemToCart = async (req, res) => {
  try {
    let cart = await cartModel.create(req.body)

    res.status(200).json({
      status: 1,
      data: cart
    })

  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}

// carts
exports.retrieveCart = async (req, res) => {
  try {
    let id = req.params.id
    let cart = await cartModel.aggregate([
      { $match: { $expr: { $eq: ['$user', { $toObjectId: id }] } } },
      {
        $lookup: {
          from: "users", localField: "user", foreignField: { "_id": id}, pipeline: [{
            $project: {
              firstName: 1,
              lastName: 1,
              _id: 0
            }
          }],
          as: "user"
        }
      },
      {
        $lookup: {
          from: "products", localField: "product", foreignField: "_id", pipeline: [{
            $project: {
              name: 1,
              imageURL: 1,
              _id: 0
            }
          }],
          as: "product"
        }
      },

      { $unwind: "$user" },
      { $unwind: "$product" },

      {
        $group: {
          // user: {$push: "$user"},
          product: {$push: "$product"}
        }
      }
    ])

    res.status(200).json({
      status: 1,
      data: cart
    })

  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}