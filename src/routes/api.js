const express = require('express')
const router = express.Router()

// controllers
const userController = require("../controllers/userController")
const adminController = require("../controllers/adminController")
const subAdminController = require("../controllers/subAdminController")
const postController = require("../controllers/postController")
const customerController = require("../controllers/customerController")
const categoryController = require("../controllers/categoryController")
const orderController = require("../controllers/orderController")
const productController = require("../controllers/productController")
const order_itemController = require("../controllers/order_itemController")
const paymentController = require("../controllers/paymentController")
const shipmentController = require("../controllers/shipmentController")
const cartController = require("../controllers/cartController")
const wishlistController = require("../controllers/wishlistController")


// user controller
router.get("/user/create", userController.create)
router.get("/user/read", userController.read)
router.get("/user/update", userController.update)
router.get("/user/delete", userController.delete)

// admin controller
router.get("/admin/create", adminController.create)
router.get("/admin/read", userController.read)
router.get("/admin/update", adminController.update)
router.get("/admin/delete", adminController.delete)

// sub-admin controller
router.get("/sub-admin/create", subAdminController.create)
router.get("/sub-admin/read", subAdminController.read)
router.get("/sub-admin/update", subAdminController.update)
router.get("/sub-admin/delete", subAdminController.delete)

// post controller
router.get("/posts/create", postController.create)
router.get("/posts/read", postController.read)
router.get("/posts/update", postController.update)
router.get("/posts/delete", postController.delete)

// customer controller
router.get("/customer/create", customerController.create)
router.get("/customer/read", customerController.read)
router.get("/customer/update", customerController.update)
router.get("/customer/delete", customerController.delete)

// category controller
router.get("/category/create", categoryController.create)
router.get("/category/read", categoryController.read)
router.get("/category/update", categoryController.update)
router.get("/category/delete", categoryController.delete)

// order controller
router.get("/order/create", orderController.create)
router.get("/order/read", orderController.read)
router.get("/order/update", orderController.update)
router.get("/order/delete", orderController.delete)

// product controller
router.get("/product/create", productController.create)
router.get("/product/read", productController.read)
router.get("/product/update", productController.update)
router.get("/product/delete", productController.delete)

// order item controller
router.get("/order-item/create", order_itemController.create)
router.get("/order-item/read", order_itemController.read)
router.get("/order-item/update", order_itemController.update)
router.get("/order-item/delete", order_itemController.delete)

// payment controller
router.get("/payment/create", paymentController.create)
router.get("/payment/read", paymentController.read)
router.get("/payment/update", paymentController.update)
router.get("/payment/delete", paymentController.delete)

// shipment controller
router.get("/shipment/create", shipmentController.create)
router.get("/shipment/read", shipmentController.read)
router.get("/shipment/update", shipmentController.update)
router.get("/shipment/delete", shipmentController.delete)

// cart controller
router.get("/cart/create", cartController.create)
router.get("/cart/read", cartController.read)
router.get("/cart/update", cartController.update)
router.get("/cart/delete", cartController.delete)

// wishlist controller
router.get("/wishlist/create", wishlistController.create)
router.get("/wishlist/read", wishlistController.read)
router.get("/wishlist/update", wishlistController.update)
router.get("/wishlist/delete", wishlistController.delete)



module.exports = router