const app = require('./app')

app.listen(process.env.port, () => {
  console.log("app running on " + process.env.port)
})