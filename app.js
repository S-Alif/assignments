const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const dotenv = require("dotenv")
const expressMongoSanitize = require("express-mongo-sanitize")
const rateLimit = require("express-rate-limit")
const hpp = require("hpp")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const app = express()
const router = require('./src/routes/api')

// security middleware
app.use(cors())
app.use(helmet())
app.use(hpp())
app.use(expressMongoSanitize())
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ limit: '5mb' }))

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300 });
app.use(limiter);
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

dotenv.config({path: "./config.env"})

// route for the routers
app.use("/assignment", router)

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    data: "Not found"
  })
})

mongoose.connect(process.env.db+""+process.env.dbName)
  .then(res => console.log('Database connected'))
  .catch(err => console.log(err))


module.exports = app