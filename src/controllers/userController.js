const jwt = require('jsonwebtoken')

// models
const userModel = require('../models/userModel')

// registration
exports.registration = async (req, res) => {
  try {
    let data = req.body
    let createUser = await userModel.create(data)

    res.status(200).json({
      status: 1,
      data: createUser
    })

  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}

// login
exports.login = async (req, res) => {
  try {
    let user_login = await userModel.find(req.body).count('total')

    // issuing token
    if (user_login == 1) {
      let payload = {
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
        email: req.body['email']
      }

      // sign the token
      let token = jwt.sign(payload, `${process.env.secretKey}`, { algorithm: 'HS256' });
      res.status(200).json({
        status: 1,
        data: token
      })
    }
    else {
      res.status(200).json({
        status: 0,
        data: user_login
      })
    }
  }
  catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}