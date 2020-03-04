const express = require('express')
const app = express()
app.use(express.json())

const recommendationRoutes = require('./routes/recommendationRoutes')

const port = process.env.PORT || 3000

const pong = {
  appName: 'Zach Recommends',
  response: 'pong'
}

app.get('/ping', (req, res) => {
  res.json(pong)
})

app.use('/recommendation', recommendationRoutes)

app.listen(port, () => {
  console.log(`server started and listening on port ${port}`)
})
