const app = require('./app')

app.listen(process.env.RUNNING_PORT, () => {
  console.log('app running on ',process.env.RUNNING_PORT)
})