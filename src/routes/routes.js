const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const taskController = require('../controllers/taskController')

const auth = require('../middlewares/auth')

router.post('/register', userController.registration)
router.get('/login', userController.login)

router.post("/create-product", taskController.createProduct)

router.post("/create-cart", auth, taskController.enterItemToCart)
router.get("/get-cart/:id", auth, taskController.retrieveCart)


module.exports = router